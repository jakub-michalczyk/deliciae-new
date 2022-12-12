export interface Modal {
  id: number;
  name: string;
  hidden: boolean;
  blockScroll?: boolean;
}

export interface Slide {}

export interface Slider {
  slides: Slide[];
  title: string;
  subtitle: string;
}
