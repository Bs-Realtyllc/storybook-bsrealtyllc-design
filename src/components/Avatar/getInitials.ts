/** Turns "Jane Doe" into "JD", "Cher" into "C". Shared by Avatar and Testimonial. */
export const getInitials = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
