import { PropsWithChildren } from "react";

export type CanvasConfig = PropsWithChildren & {
  layers: CanvasLayer[];
  height: number;
  width: number;
  debug?: boolean;
  reset?: boolean;
  bordered?: boolean;
}

export type CanvasLayer = {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  transform?: Array<number>;
  arc?: [number, number, number, number, number, boolean?];
  background?: string;
  border?: string;
  src?: string | HTMLImageElement | HTMLCanvasElement;
  transparent?: boolean,
  borderRadius?: string;
  text?: string;
  textCallback?: Function;
  skipTextFilter?: boolean;
  minFontSize?: number;
  maxFontSize?: number;
  font?: string;
  maxLimit?: number;
  color?: string;
  shadow?: boolean;
}

const imgCache = {} as any;

const hex = (arrayBuffer: any) => {
  return Array.prototype.map.call(
    new Uint8Array(arrayBuffer),
    n => n.toString(16).padStart(2, "0")
  ).join("");
}

/**
 * Download an image from a canvas
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} tokenId
 */
export const downloadImage = (canvas: HTMLCanvasElement, tokenId: string | number) => {
  const link = document.createElement('a');
  link.download = `${tokenId}.png`;
  link.href = canvas.toDataURL();
  link.click();
};

/**
 * @returns {HTMLCanvasElement}
 */
export const imageToCanvas = (img: HTMLImageElement, width: number, height: number, createCanvas?: Function): HTMLCanvasElement => {
  const canvas = createCanvas ? createCanvas(width, height) : document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = height;
  canvas.width = width;
  ctx.drawImage(img, 0, 0, width, height);

  return canvas;
}

/**
 * @returns {Promise<string>}
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = (result) => {
        onSuccess(result?.target?.result as string);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
}

/**
 * @returns {Promise<Blob>}
 */
export const fetchImageBlob = async (url: string): Promise<Blob> => {
  return fetch(url, { mode: 'cors' }).then((response: Response) => {
    return response.blob();
  });
};

/**
 * @returns {Promise<string>}
 */
export const imageUrlToBase64 = async (url: string): Promise<string> => {
  return fetchImageBlob(url).then((blob: Blob) => {
    return blobToBase64(blob);
  });
};

/**
 * @returns {Promise<HTMLImageElement>}
 */
export function resolveImage(src: string) {
  if (imgCache[src]) {
    const img = new Image()
    img.crossOrigin = "Anonymous";
    img.src = imgCache[src];
    return Promise.resolve(img);
  }

  return new Promise((resolve, reject) => {
    return imageUrlToBase64(src).then((dUri) => {
      const img = new Image()
      img.crossOrigin = "Anonymous";
      img.src = dUri;
      imgCache[src] = dUri;

      resolve(img);
    }).catch(reject)
  });
}

export function drawMultilineText(ctx: CanvasRenderingContext2D, text: string, options: any) {
  let opts = options;
  if (!opts)
    opts = {}
  if (!opts.font)
    opts.font = `sans-serif`;
  if (!opts.rect)
    opts.rect = {
      x: 0,
      y: 0,
      width: ctx.canvas.width,
      height: ctx.canvas.height
    }
  if (!opts.lineHeight)
    opts.lineHeight = 1.1
  if (!opts.minFontSize)
    opts.minFontSize = 30
  if (!opts.maxFontSize)
    opts.maxFontSize = 100

  const words = text.split(' ');
  let lines = [];
  let y;
  let fontSize;
  let lastFittingLines = [] as any;
  let lastFittingFont;
  let lastFittingY = 1;
  let lastFittingLineHeight = 1;
  for (fontSize = opts.minFontSize; fontSize <= opts.maxFontSize; fontSize += 1) {
    // Line height
    const lineHeight = fontSize * opts.lineHeight;

    // Set font for testing with measureText()
    ctx.font = `${fontSize}px ${opts.font}`;

    // Start
    const { x } = opts.rect;
    y = lineHeight;
    lines = [];
    let line = '';
    
    if (words.length > 1) {
      // eslint-disable-next-line no-restricted-syntax
      for (const word of words) {
        // Add next word to line
        const linePlus = `${line}${word} `;
  
        // If added word exceeds rect width...
        if (ctx.measureText(linePlus).width >= opts.rect.width) {
          // ..."prints" (save) the line without last word
          lines.push({ text: line, x, y });
          // New line with ctx last word
          line = `${word} `;
          y += lineHeight
        } else {
          // ...continues appending words
          line = linePlus
        }
      }
    } else {
      line = words.join('');
    }

    if (ctx.measureText(line).width > opts.rect.width) {
      break;
    }

    lines.push({ text: line, x, y })

    // If bottom of rect is reached then breaks "fontSize" cycle
    if (y > opts.rect.height)                                           
      break;
        
    lastFittingLines = lines;
    lastFittingFont = ctx.font;
    lastFittingY = y;
    lastFittingLineHeight = lineHeight;
  }

  lines = lastFittingLines;
  ctx.font = lastFittingFont || options.font;                                        
  const offset = opts.rect.y - (lastFittingLineHeight / 4) + (opts.rect.height - lastFittingY) / 2;

  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    let l = line.text.trim();
    if (ctx.measureText(l).width > opts.rect.width) {
      while (ctx.measureText(l).width > opts.rect.width) {
        const a = l.split('');
        a.pop();
        l = a.join('');
      }
    }
    ctx.fillText(l, line.x + (opts.rect.width / 2), line.y + offset);
  }

  return fontSize;
}

export const generateLayeredCanvas = (
  config: CanvasConfig,
  canvas?: HTMLCanvasElement,
  createCanvas?: Function,
) => {
  const { width, height, layers, debug } = config;
  const canvasCreate = createCanvas || function(w: number, h: number) {
    const canv = document.createElement('canvas');
    canv.width = w;
    canv.height = h;

    return canv;
  };

  const ctx = (canvas || canvasCreate(width, height)).getContext('2d');

  layers.forEach((l) => {
    const lWidth = l.width || width;
    const lHeight = l.height || height;
    const layerCanvas = canvasCreate(
      lWidth,
      lHeight
    );

    const layerCtx = layerCanvas.getContext('2d', { willReadFrequently: true });
  
    if (l.transform) {
      layerCtx.transform(
        l.transform[0],
        l.transform[1],
        l.transform[2],
        l.transform[3],
        l.transform[4],
        l.transform[5]
      );
    }

    const bg = debug ? 'blue' : (l.background || '');
    if (bg && bg !== 'inherit') {
      layerCtx.fillStyle = debug ? 'blue' : (l.background || '');
      layerCtx.fillRect(0, 0, layerCanvas.width, layerCanvas.height);
    }

    if (typeof (l as any).src !== 'undefined') {
      if (l.transparent === true || l.background === 'inherit') {
        const tokenCanv = canvasCreate(layerCanvas.width, layerCanvas.height);
        const tokenCtx = tokenCanv.getContext('2d', { willReadFrequently: true });
        tokenCtx.drawImage(l.src, 0, 0, layerCanvas.width, layerCanvas.height);
        const pixelData = tokenCtx.getImageData(0, 0, 1, 1).data;
        const imageData = tokenCtx.getImageData(0, 0, lWidth, lHeight);
        const hexBg = hex(pixelData);
        const shortendHexBg = hexBg.substring(0, hexBg.length - 2).toLowerCase();
    
        if (l.background === 'inherit') {
          const bgCanvas = canvasCreate(
            width,
            height
          );
          const bgCtx = bgCanvas.getContext('2d');
          bgCtx.fillStyle = `#${shortendHexBg}`;
          bgCtx.fillRect(0, 0, width, height);
          ctx.drawImage(
            bgCanvas,
            0,
            0,
            bgCanvas.width,
            bgCanvas.height
          );
        }
        if (l.transparent === true) {
          for (let i = 0; i < imageData.data.length; i += 4) {
            const red = imageData.data[i];
            const green = imageData.data[i + 1];
            const blue = imageData.data[i + 2];
    
            // check if the pixel color matches the color to remove
            if (red == pixelData[0] && green == pixelData[1] && blue == pixelData[2]) {
              // set the pixel color to transparent
              imageData.data[i + 3] = 0;
            }
          }
  
          tokenCtx.putImageData(imageData, 0, 0);
        }
  
        layerCtx.drawImage(
          tokenCanv,
          0,
          0,
          layerCanvas.width,
          layerCanvas.height
        );
      } else {
        layerCtx.drawImage(
          l.src,
          0,
          0,
          layerCanvas.width,
          layerCanvas.height
        );
      }

    } else if (typeof (l as any).text !== 'undefined') {
      const textCallbackFunction = l.textCallback ? l.textCallback : (t: string) => t;

      let sentence = textCallbackFunction((l as any).text || '');
      const { maxLimit, color, shadow, minFontSize, maxFontSize, font } = l as any;
      
      // validate text length
      if (maxLimit && sentence.length >= maxLimit) {
        sentence = sentence.slice(0, maxLimit - 3).trim().concat('...');
      }

      const tempCanvas = canvasCreate(
        layerCanvas.width,
        layerCanvas.height
      );

      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.textAlign = 'center';
      tempCtx.fillStyle = color || '#fff';

      if (shadow) {
        tempCtx.shadowColor = "black";
        tempCtx.shadowBlur = 4;
        tempCtx.lineWidth = 2;
      }

      drawMultilineText(tempCtx, sentence, {
        minFontSize: minFontSize || 20,
        maxFontSize: maxFontSize || 300,
        font: font || undefined
      });

      tempCtx.drawImage(
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );

      layerCtx.drawImage(
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );
    }
  
    ctx.drawImage(
      layerCanvas,
      l.x || 0,
      l.y || 0,
      layerCanvas.width,
      layerCanvas.height
    );
  })

  return canvas;
}