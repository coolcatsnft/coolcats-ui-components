import { forwardRef } from "react";
import { BaseCanvasConfig } from "../canvasUtils";
import { CanvasConfig } from "../Avatar/types";
import LayeredCanvas from "../LayeredCanvas";
import { createAvatarCanvasLayers } from "../Avatar/utils";

type AvatarCanvasConfig = CanvasConfig & BaseCanvasConfig;

export const AvatarCanvas = forwardRef((props: AvatarCanvasConfig, ref: any) => {
  const { traits, height, children, reset, bordered, width, view, baseUrl, type, tokenId } = props;

  return (
    <LayeredCanvas 
      width={width}
      height={height}
      reset={reset}
      ref={ref}
      bordered={bordered}
      children={children}
      layers={
        createAvatarCanvasLayers({
          view,
          type,
          tokenId,
          traits,
          height,
          width,
          baseUrl
        })
      }
    />
  )
})

export default AvatarCanvas;