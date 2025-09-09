declare module '@splidejs/react-splide' {
  import * as React from 'react';
  import type { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    tag?: string;
    children?: React.ReactNode;
    className?: string;
    id?: string;
    ariaLabel?: string;
  }

  export interface SplideSlideProps {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}
