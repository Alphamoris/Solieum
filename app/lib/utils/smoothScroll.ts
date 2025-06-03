/**
 * Utility function to handle smooth scrolling to elements or positions
 */

/**
 * Scroll to a specific element by ID with smooth behavior
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Scroll to a specific position on the page with smooth behavior
 */
export const scrollToPosition = (x: number, y: number): void => {
  window.scrollTo({
    top: y,
    left: x,
    behavior: 'smooth',
  });
};

/**
 * Scroll to the top of the page with smooth behavior
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

/**
 * Add an ID to an element and create a function to scroll to it
 * @returns A function that when called will scroll to the element
 */
export const createScrollToHandler = (elementId: string) => (): void => {
  scrollToElement(elementId);
}; 