export enum Avatar {
  CAT = 'CAT',
  SHADOWWOLF = 'SHADOWWOLF',
  EXPLORER = 'EXPLORER'
}

export enum AvatarView {
  FRONT = 'FRONT',
  RIGHT = 'RIGHT',
  FULL = 'FULL',
  LEFT = 'LEFT',
  HEAD = 'HEAD'
};

export enum TraitType {
  BACKGROUND = 'BACKGROUND',
  BODY = 'BODY',
  SHIRT = 'SHIRT',
  FACE = 'FACE',
  HAT = 'HAT',
  PANTS = 'PANTS',
  SHOES = 'SHOES',
  EFFECT = 'EFFECT',
  BORDER = 'BORDER',
  SIDEKICK = 'SIDEKICK'
}

export type AvatarType = {
  type: Avatar,
  view: AvatarView;
}

export type AvatarToken = AvatarType & {
  tokenId: string;
}

export enum TraitRuleType {
  FILTER = 'FILTER',
  MUTATE = 'MUTATE',
  EFFECT = 'EFFECT'
}

export enum TraitRarity {
  NONE = 0,
  COMMON = 1,
  UNCOMMON = 2,
  RARE = 3,
  EPIC = 4,
  LEGENDARY = 5
}

export enum TraitRuleFunction {
  HIDE_VISOR = 'HIDE_VISOR',
  EFFECT_BLACK_AND_WHITE = 'EFFECT_BLACK_AND_WHITE',
  EFFECT_OUTLINE = 'EFFECT_OUTLINE',
  EFFECT_INVERSE = 'EFFECT_INVERSE',
  MOVE_PANTS_UNDER_SHIRT = 'MOVE_PANTS_UNDER_SHIRT',
  MOVE_PANTS_OVER_SHIRT = 'MOVE_PANTS_OVER_SHIRT',
  EFFECT_OUTLINE_LEFT_CAT = 'EFFECT_OUTLINE_LEFT_CAT'
}

export type TraitRuleFunctionMap = {
  [key in keyof typeof TraitRuleFunction]?: Function;
}

export type AvatarTypeView = AvatarType & {
  visible?: boolean;
}

export type TraitRule = {
  type: TraitRuleType;
  fn: TraitRuleFunction;
}

export type Contract = {
  address: `0x${string}`;
  network: 'polygon' | 'mainnet' | 'mumbai';
}

export type TraitContract = {
  tokenId: number;
  contract: Contract;
}

export type TraitImage = {
  uri: string;
  weight?: number;
  showOnlyIf?: Function;
}

export type Trait = {
  type: Avatar;
  view: AvatarView;
  name: string;
  rarity: TraitRarity;
  contract?: TraitContract;
  images: TraitImage[];
  displayImage?: TraitImage;
  displayName?: string;
  additional?: boolean;
  rules?: TraitRule[];
  description?: string;
  weight?: number;
  height?: number;
  boundTo?: ApiToken;
  width?: number;
  offsetX?: number;
  offsetY?: number;
  traitType: TraitType;
  generated?: HTMLImageElement|HTMLCanvasElement;
}

export type CanvasImage = {
  image: HTMLImageElement|HTMLCanvasElement;
  trait: Trait;
}

export type CanvasConfigImages = {
  view: AvatarView;
  images: CanvasImage[];
  createCanvas: Function;
  width?: number;
  height?: number;
  canvas?: HTMLCanvasElement;
}

export type CreateAvatarTraitsConfig = {
  view: AvatarView;
  traits: Trait[];
  width?: number;
  height?: number;
  baseUrl?: string;
}

export type CanvasConfig = CreateAvatarTraitsConfig & {
  createCanvas: Function;
  canvas?: HTMLCanvasElement;
  imageLoader?: Function;
}

export type Metadata = {
  trait_type: string;
  value: string;
}

export type AvatarSubTypes = {
  [key in keyof typeof Avatar]: AvatarType[]
}

export type MetadataTraitKey = {
  [key in keyof typeof TraitType]: string;
}

export type TraitView = {
  [key in keyof typeof AvatarView]: Trait[]  
}

export type AvatarTraitView = {
  [key in keyof typeof Avatar]?: TraitView
}

export type AvatarItem = {
  id: number;
  trait: Trait;
  tokenId: string;
  owner: `0x${string}`;
  equipped?: number[];
  disabledReason?: string[];
  selected?: boolean;
  balance: number;
  weight?: number;
  boundTo?: ApiToken[];
}

export type ApiToken = {
  token_id: string;
  token_type: Avatar;
  pfp?: boolean;
}

export type ApiAvatarRecord = {
  id: number;
  type: Avatar;
  tokenId: number;
  view: AvatarView;
  walletid: number;
  owner: string;
  avatarTokenId: string;
  pfp: 1 | 0;
}