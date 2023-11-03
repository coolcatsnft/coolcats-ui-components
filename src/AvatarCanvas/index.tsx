import { forwardRef, useEffect, useState } from "react";
import { BaseCanvasConfig } from "../canvasUtils";
import { AvatarView, CanvasConfig } from "../Avatar/types";
import LayeredCanvas from "../LayeredCanvas";
import { createAvatarCanvasLayers } from "../Avatar/utils";

type AvatarCanvasConfig = CanvasConfig & BaseCanvasConfig;

export const AvatarCanvas = forwardRef((props: AvatarCanvasConfig, ref: any) => {
  const { traits, height, children, reset, bordered, width, view, baseUrl, type, tokenId } = props;

  const [stateView, setStateView] = useState<AvatarView>(view);

  useEffect(() => {
    if (view) {
      setStateView(view);
    }
  }, [view]);

  return (
    <LayeredCanvas 
      width={width}
      height={height}
      reset={reset || view !== stateView}
      ref={ref}
      bordered={bordered}
      children={children}
      layers={
        createAvatarCanvasLayers({
          view: stateView,
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