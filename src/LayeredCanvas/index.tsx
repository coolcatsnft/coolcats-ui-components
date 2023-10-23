import { forwardRef, useEffect, useRef, useState } from "react";
import styled from "../Styled";
import { CanvasLayer, CanvasConfig, generateLayeredCanvas, resolveImage } from "../canvasUtils";
import { device } from "../constants";

const StyledCanvasImage = styled.canvas<{ $width: string, $bordered?: boolean }>`
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  display: block;
  border-radius: ${({ $bordered }) => $bordered ? 'var(--cc-radius)' : 'initial'};
  border: ${({ $bordered }) => $bordered ? '4px solid rgba(0, 0, 0, 0.2);' : '0 none'};
`;

const StyledLayeredCanvasContainer = styled.div<{ $loading: boolean, $height: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${device.tablet} {
    min-height: ${({ $loading, $height }) => $loading ? `${$height < 532 ? $height : 532}px` : 'auto'};
  }

  nav {
    opacity: 1;
    margin-top: var(--cc-gap);
    width: 100%;
    justify-content: space-between;
    position: static;

    > button {
      svg {
        fill: var(--cc-primary);
      }
    }
  }
`;

export const LayeredCanvas = forwardRef((props: CanvasConfig, ref: any) => {
  const [layers, setLayers] = useState<Array<CanvasLayer>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { layers: propsLayers, height, children, reset, bordered, width } = props;

  useEffect(() => {
    if (reset) {
      setLayers([]);
    } else {
      Promise.all(
        propsLayers.map(l => {
          if (typeof l.src === 'string') {
            return resolveImage(l.src).then(img => {
              return {
                ...l,
                src: img
              }
            })
          }
  
          return Promise.resolve(l);
      })).then((newLayers) => {
        setLayers(newLayers as any);
      });
    }
  }, [propsLayers, reset]);

  useEffect(() => {
    if (layers.length > 0 && (ref?.current || canvasRef?.current)) {
      generateLayeredCanvas(
        {
          ...props,
          layers
        },
        ref?.current || canvasRef?.current
      );
    }
  }, [layers, props, ref, canvasRef]);

  return (
    <StyledLayeredCanvasContainer 
      data-loading={layers.length === 0 ? 'true' : 'false'} 
      $loading={layers.length === 0} 
      $height={height}
    >
      <StyledCanvasImage height={height} width={width} $width='1000px' $bordered={bordered} ref={ref || canvasRef} />
      { children || null }
    </StyledLayeredCanvasContainer>
  )
})

export default LayeredCanvas;