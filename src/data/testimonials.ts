export type Testimonial = {
  name: string;
  location?: string;
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

/**
 * PLACEHOLDER — intentionally empty.
 *
 * Do not fabricate reviews. Populate this array only with real, verified
 * client testimonials once ELQ Cleaning has them. Until then the
 * Testimonials section renders an honest "coming soon" empty state.
 */
export const testimonials: Testimonial[] = [];
