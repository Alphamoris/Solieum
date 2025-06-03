/**
 * A simple utility function to conditionally join CSS class names together
 */
export function cn(...classes: (string | boolean | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Creates a variant class generator using class-variance-authority
 * Import this function to create component variants
 */
export { cva, type VariantProps } from 'class-variance-authority';

/**
 * Generates responsive classes based on breakpoints
 * @param {Object} classMap - Map of breakpoint to class names
 * @returns {string} - Combined class string
 */
export function responsive(classMap: Record<string, string>): string {
  const classes: string[] = [];
  
  // Base class (no breakpoint prefix)
  if (classMap.base) {
    classes.push(classMap.base);
  }
  
  // Breakpoint-specific classes
  if (classMap.sm) {
    classes.push(`sm:${classMap.sm}`);
  }
  
  if (classMap.md) {
    classes.push(`md:${classMap.md}`);
  }
  
  if (classMap.lg) {
    classes.push(`lg:${classMap.lg}`);
  }
  
  if (classMap.xl) {
    classes.push(`xl:${classMap.xl}`);
  }
  
  if (classMap['2xl']) {
    classes.push(`2xl:${classMap['2xl']}`);
  }
  
  return classes.join(' ');
}

/**
 * Creates a class string for spacing with responsive values
 * @param {string} property - CSS property (margin, padding, gap)
 * @param {Object} values - Values for different breakpoints
 * @returns {string} - Tailwind class string
 */
export function spacing(
  property: 'p' | 'm' | 'gap',
  values: {
    base?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    '2xl'?: string | number;
  }
): string {
  const classes: string[] = [];
  
  // Base value (no breakpoint prefix)
  if (values.base !== undefined) {
    classes.push(`${property}-${values.base}`);
  }
  
  // Breakpoint-specific values
  if (values.sm !== undefined) {
    classes.push(`sm:${property}-${values.sm}`);
  }
  
  if (values.md !== undefined) {
    classes.push(`md:${property}-${values.md}`);
  }
  
  if (values.lg !== undefined) {
    classes.push(`lg:${property}-${values.lg}`);
  }
  
  if (values.xl !== undefined) {
    classes.push(`xl:${property}-${values.xl}`);
  }
  
  if (values['2xl'] !== undefined) {
    classes.push(`2xl:${property}-${values['2xl']}`);
  }
  
  return classes.join(' ');
}

/**
 * Creates a class string for font sizes with responsive values
 * @param {Object} values - Font size values for different breakpoints
 * @returns {string} - Tailwind class string
 */
export function fontSize(values: {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}): string {
  const classes: string[] = [];
  
  // Base value (no breakpoint prefix)
  if (values.base) {
    classes.push(`text-${values.base}`);
  }
  
  // Breakpoint-specific values
  if (values.sm) {
    classes.push(`sm:text-${values.sm}`);
  }
  
  if (values.md) {
    classes.push(`md:text-${values.md}`);
  }
  
  if (values.lg) {
    classes.push(`lg:text-${values.lg}`);
  }
  
  if (values.xl) {
    classes.push(`xl:text-${values.xl}`);
  }
  
  if (values['2xl']) {
    classes.push(`2xl:text-${values['2xl']}`);
  }
  
  return classes.join(' ');
}

/**
 * Creates gradient text class
 * @param {string} gradientName - Name of the gradient from design tokens
 * @returns {string} - Tailwind class string for gradient text
 */
export function gradientText(gradientName: string): string {
  return `bg-clip-text text-transparent bg-gradient-to-r ${gradientName}`;
}

/**
 * Creates a focus ring class with custom color
 * @param {string} color - Ring color (from design tokens)
 * @returns {string} - Tailwind class string for focus ring
 */
export function focusRing(color: string = 'primary.purple.500'): string {
  return `focus:outline-none focus-visible:ring-2 focus-visible:ring-${color} focus-visible:ring-offset-2`;
} 