declare module 'react-responsive-masonry' {
  import React, { ReactNode } from 'react';

  interface MasonryProps {
    columnsCount?: number;
    gutter?: string;
    className?: string;
    children?: ReactNode;
  }

  interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    gutter?: string;
    className?: string;
    children?: ReactNode;
  }

  export function ResponsiveMasonry(props: ResponsiveMasonryProps): React.ReactElement;
  export default function Masonry(props: MasonryProps): React.ReactElement;
}
