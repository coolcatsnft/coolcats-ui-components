import { AvatarView, CreateAvatarTraitsConfig, Trait, TraitImage, TraitRule, TraitRuleFunction, TraitRuleType, TraitType } from "./types";
import { effects, mutations } from './rules'
import { CanvasLayer } from "../canvasUtils";

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;

export function applyDefaultWeights(trait: Trait) {
  return {
    ...trait,
    weight: {
      [TraitType.BACKGROUND]: 0,
      [TraitType.BODY]: 1,
      [TraitType.PANTS]: 2,
      [TraitType.SHOES]: 3,
      [TraitType.SHIRT]: 4,
      [TraitType.FACE]: 5,
      [TraitType.HAT]: 6,
      [TraitType.BORDER]: 7,
      [TraitType.SIDEKICK]: 8,
      [TraitType.EFFECT]: 100
    }[trait.traitType]
  }
}

export function evaluateTraitMutateRules(trait: Trait, traits: Trait[]) {
  const rules = (trait.rules || []).filter(r => r.type === TraitRuleType.MUTATE);
  if (rules.length > 0) {
    return rules.map(r => {
      const fn = mutations[r.fn];
      if (typeof fn === 'function') {
        return fn(trait, traits)
      }

      return;
    }).filter(
      r => r
    ).reduce((cur, i) => {
      return {
        ...cur,
        ...i
      };
    }, trait);
  }

  return trait;
}

export function applyWeights(traitA: Trait, traitB: Trait) {
  const weightA = (typeof traitA.weight === 'number') ? traitA.weight : applyDefaultWeights(traitA).weight;
  const weightB = (typeof traitB.weight === 'number') ? traitB.weight : applyDefaultWeights(traitB).weight;
  return weightA - weightB;
}

/**
 * @param config 
 * @returns {CanvasLayer[]}
 */
export function createAvatarCanvasLayers(
  config: CreateAvatarTraitsConfig
) {
  const {
    view,
    traits, 
    width, 
    height,
    baseUrl
  } = config;

  const hasSidekick = traits.find(t => t.traitType === TraitType.SIDEKICK && t.name !== 'no sidekick');

  // Map out traits into the Layered canvas config.  
  // This may require reducing as some layers will have multiple images
  const sortedTraits = traits.map((trait: Trait) => {
    // Apply default rules
    return {
      ...trait,
      rules: (trait.rules || []).concat(
        trait.type === 'CAT' && trait.traitType === TraitType.PANTS ? [
          {
            fn: TraitRuleFunction.MOVE_PANTS_OVER_SHIRT,
            type: TraitRuleType.MUTATE
          }
        ] : []
      ).concat(
        trait.type === 'CAT' && trait.traitType === TraitType.PANTS ? [
          {
            fn: TraitRuleFunction.MOVE_PANTS_UNDER_SHIRT,
            type: TraitRuleType.MUTATE
          }
        ] : []
      )
    }
  }).map((trait: Trait) => {
    // Apply any trait mutations necessary
    // Mutate any images with mutate rules
    return evaluateTraitMutateRules(
      trait,
      traits
    );
  }).filter(t => {
    if (hasSidekick && view === AvatarView.FRONT) {
      return t.traitType !== TraitType.SIDEKICK;
    }

    return true;
  }).map((trait: Trait) => {
    if (view === AvatarView.FRONT && trait.traitType !== TraitType.BACKGROUND) {
      return {
        ...trait,
        offsetY: (height || CANVAS_HEIGHT) / 10,
        offsetX: ((width || CANVAS_WIDTH) * -1) / 2,
        width: (width || CANVAS_WIDTH) * 2,
        height: (height || CANVAS_HEIGHT) * 2
      }
    }

    if (hasSidekick 
      && view === AvatarView.FULL 
      && trait.traitType !== TraitType.BACKGROUND 
      && trait.traitType !== TraitType.SIDEKICK
    ) {
      return {
        ...trait,
        offsetX: (width || CANVAS_WIDTH) * 0.11
      }
    }
    return trait;
  }).sort((a: Trait, b: Trait) => {
    return applyWeights(a, b);
  });

  return sortedTraits.reduce((layers: CanvasLayer[], trait: Trait) => {
    // Apply any effects
    const canvasEffects = traits.filter(
      (i: Trait) => i.traitType === TraitType.EFFECT
    ).reduce((traitEffects: Function[], trait: Trait) => {
      const funcs = (trait.rules || []).filter(
        (r: TraitRule) => r.type === TraitRuleType.EFFECT && typeof effects[r?.fn || ''] === 'function'
      ).map(tr => effects[tr?.fn || ''] as Function);
  
      return traitEffects.concat(funcs);
    }, []);

    // Transform the trait layer into a canvas layer
    const newLayer = trait.images.sort((a: TraitImage, b: TraitImage) => {
      return (a?.weight || 0) - (b?.weight || 0);
    }).reduce((newLayers: CanvasLayer[], traitImage: TraitImage) => {
      return newLayers.concat([
        {
          src: `${(baseUrl || '').replace('$traitType', trait.traitType.toLowerCase())}${traitImage.uri}`,
          height: trait.height || height || CANVAS_HEIGHT,
          width: trait.width || width || CANVAS_WIDTH,
          x: typeof trait.offsetX === 'number' ? trait.offsetX : 0,
          y: typeof trait.offsetY === 'number' ? trait.offsetY : 0,
          canvasCallbacks: canvasEffects
        }
      ])
    }, []);
    return layers.concat(newLayer);
  }, []);
}