export enum CardState {
  Initial = "Initial",
  FirstTrigger = "FirstTrigger",
  LittleUp = "LittleUp",
  BackToCenter = "BackToCenter",
  Flip = "Flip",
}

export type Transform = {
  scale?: number;
  y?: number;
  x?: number;
  rotate?: number;
  rotateY?: number;
};

export type CardConfig = {
  spring: {
    stiffness: number;
    damping: number;
    mass: number;
    type: string;
    bounce?: number;
    duration?: number;
  };
  states: Record<CardState, Transform>;
};

const commonSpring = {
  stiffness: 500,
  damping: 60,
  mass: 1,
  type: "spring",
};

export const CARD_ONE_CONFIG: CardConfig = {
  spring: commonSpring,
  states: {
    [CardState.Initial]: { scale: 0.8, y: 20, rotate: 0, rotateY: 0 },
    [CardState.FirstTrigger]: { scale: 0.9, y: 170 },
    [CardState.LittleUp]: { scale: 1, y: 70 },
    [CardState.BackToCenter]: { scale: 1, y: -30, rotate: 1 },
    [CardState.Flip]: { scale: 1, y: -60, x: -30, rotate: 4, rotateY: -180 },
  },
};

export const CARD_TWO_CONFIG: CardConfig = {
  spring: commonSpring,
  states: {
    [CardState.Initial]: { scale: 0.8, y: 0, rotate: 0, rotateY: 0 },
    [CardState.FirstTrigger]: { scale: 0.9, y: 210 },
    [CardState.LittleUp]: { scale: 1, y: 140 },
    [CardState.BackToCenter]: { scale: 1, y: 20, rotate: -2 },
    [CardState.Flip]: { scale: 1, y: 0, x: 290, rotate: -3, rotateY: -180 },
  },
};

export const CARD_THREE_CONFIG: CardConfig = {
  spring: commonSpring,
  states: {
    [CardState.Initial]: { scale: 0.8, y: -20, rotate: 0, rotateY: 0 },
    [CardState.FirstTrigger]: { scale: 0.9, y: 270 },
    [CardState.LittleUp]: { scale: 1, y: 230 },
    [CardState.BackToCenter]: { scale: 1, y: 92, rotate: -2 },
    [CardState.Flip]: { scale: 1, y: 52, x: 610, rotate: -7, rotateY: -180 },
  },
};

export const triggersConfig = {
  firstTrigger: "75vh",
  secondTriggers: {
    littleUp1: "50vh",
    littleUp2: "30vh",
    littleUp3: "18.25vh",
  },
  thirdTriggers: {
    backToCenter1: "27.26vh",
    backToCenter2: "33.875vh",
    backToCenter3: "37.75vh",
  },
  fourthTriggers: {
    flip1: "74.125vh",
    flip2: "60.1vh",
    flip3: "46.75vh",
  },
};
