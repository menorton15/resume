
export type CardData = {
  headline: string;
  panelOne: Panel;
  panelTwo?: Panel;
  animation: unknown;
  animationStart: boolean;
  alt: string;
  logoImg: string;
  textSplit: boolean;
  descTransition?: TransitionOpts;
};

export type TransitionOpts = {
  rootMargin?: string;
  animation?: string;
  reverse?: string;
};

export type Panel = {
  content: string[];
  animation?: string;
};
