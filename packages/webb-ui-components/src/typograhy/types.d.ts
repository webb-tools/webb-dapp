import { ReactHTML } from 'react';

export type TypographyBaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export type TypographyAlignValues = 'center' | 'justify' | 'right' | 'left';

export type TypographyFontWeightValues = 'normal' | 'semibold' | 'bold';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type BodyVariant = 'body1' | 'body2' | 'body3' | 'body4';

export type MonospaceVariant = 'mono1' | 'mono2';

export type WebbTypographyVariant = HeadingVariant | BodyVariant | MonospaceVariant;

/**
 * Properties of typography component
 * - `variant`: Represent diffferent variants of the component
 * - `component`: The html tag (default: same as `variant` prop)
 * - `fw`: Represent the **font weight** of the component (default: `left`)
 * - `ta`: Text align (default: `inherit`)
 * - `darkMode`: Control component dark mode display in `js`, leave it's empty if you want to control dark mode in `css`
 */
export interface WebbTypographyProps<TypoVariant = WebbTypographyVariant> extends TypographyBaseProps {
  /**
   * Represent diffferent variants of the component
   */
  variant: TypoVariant;
  /**
   * The html tag
   */
  component?: keyof ReactHTML;
  /**
   * Font weight
   */
  fw?: TypographyFontWeightValues;
  /**
   * Text align
   */
  ta?: TypographyAlignValues;
  /**
   * Dark mode control for `js`, leave it's empty to control dark mode in `css`
   */
  darkMode?: boolean;
}
