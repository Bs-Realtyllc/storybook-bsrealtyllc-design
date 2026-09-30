import './BSRealtyTestimonial.css';
import { BSRealtyStarRating } from '../StarRating/BSRealtyStarRating';
import { getInitials } from '../Avatar/getInitials';

export interface BSRealtyTestimonialProps {
  /** The testimonial quote text */
  quote: string;
  /** Reviewer's full name */
  name: string;
  /** Star rating (0–5) */
  rating: number;
  /** URL of the reviewer's avatar photo */
  avatarUrl?: string;
  /** Fallback initials if no avatarUrl is provided */
  avatarInitials?: string;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

const QuoteIcon = () => (
  <span
    aria-hidden="true"
    className="bsr-testimonial__quote-icon"
  >
    &#8220;
  </span>
);

export const BSRealtyTestimonial = ({
    className = '',
  quote = 'Buying our first home felt overwhelming, but the BS Realty team made the entire process simple and stress-free. Their guidance helped us find the perfect property within our budget.',
  name = 'Rachel Hadid',
  rating = 5,
  avatarUrl,
  avatarInitials,
}: BSRealtyTestimonialProps) => {
  const initials = avatarInitials || getInitials(name);

  return (
    <div className={`bsr-testimonial ${className}`}>
      {/* Avatar — overlaps top-left of card */}
      <div className="bsr-testimonial__avatar">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="bsr-testimonial__avatar-img" />
        ) : (
          <span className="bsr-testimonial__avatar-initials">{initials}</span>
        )}
      </div>

      {/* Card body */}
      <div className="bsr-testimonial__card">
        {/* Quote text */}
        <p className="bsr-testimonial__quote">{quote}</p>

        {/* Footer: name + stars | quote icon */}
        <div className="bsr-testimonial__footer">
          <div className="bsr-testimonial__meta">
            <span className="bsr-testimonial__name">{name}</span>
            <BSRealtyStarRating rating={rating} readOnly />
          </div>
          <QuoteIcon />
        </div>
      </div>
    </div>
  );
};
