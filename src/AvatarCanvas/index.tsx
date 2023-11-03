import { forwardRef, useEffect, useState } from "react";
import { BaseCanvasConfig } from "../canvasUtils";
import { AvatarView, CanvasConfig, Trait } from "../Avatar/types";
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

  const [stateTraits, setStateTraits] = useState<Trait[]>(traits);

  useEffect(() => {
    if (traits) {
      setStateTraits(traits);
    }
  }, [traits]);

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
          traits: stateTraits,
          height,
          width,
          baseUrl
        })
      }
    />
  )
})

export default AvatarCanvas;