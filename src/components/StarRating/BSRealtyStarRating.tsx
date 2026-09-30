import { useId } from 'react';
import type { KeyboardEvent } from 'react';
import './BSRealtyStarRating.css';

export interface BSRealtyStarRatingProps {
  /** Rating value between 0 and 5, supports 0.5 increments */
  rating: number;
  /** Total number of stars */
  maxStars?: number;
  /** Size of each star in px. Defaults to the --bsr-icon-size-md token (18px). */
  size?: number;
  /** Allow interactive rating selection */
  readOnly?: boolean;
  /** Called when user selects a rating (readOnly must be false) */
  onChange?: (rating: number) => void;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

const StarIcon = ({
  id,
  fill,
  size,
  onClick,
}: {
  id: string;
  fill: 'full' | 'half' | 'empty';
  /** px number, or any CSS length such as a token var() */
  size: number | string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}) => {
  const starPath =
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

  const clipId = `half-clip-${id.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      className="bsr-star"
      style={{ width: size, height: size }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onClick={onClick}
    >
      {fill === 'half' && (
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>
        </defs>
      )}

      {/* Empty (gray) base */}
      <path d={starPath} fill="var(--bsr-color-disabled-fg-muted)" />

      {/* Filled overlay */}
      {fill === 'full' && <path d={starPath} fill="var(--bsr-color-rating-star)" />}
      {fill === 'half' && (
        <path d={starPath} fill="var(--bsr-color-rating-star)" clipPath={`url(#${clipId})`} />
      )}
    </svg>
  );
};

export const BSRealtyStarRating = ({
    className = '',
  rating,
  maxStars = 5,
  size,
  readOnly = true,
  onChange,
}: BSRealtyStarRatingProps) => {
  // Unique per instance so two ratings on one page don't share clip-path ids
  const instanceId = useId();
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);

  const getFill = (index: number): 'full' | 'half' | 'empty' => {
    const starValue = index + 1;
    if (clampedRating >= starValue) return 'full';
    if (clampedRating >= starValue - 0.5) return 'half';
    return 'empty';
  };

  const handleClick = (index: number, half: boolean) => {
    if (readOnly || !onChange) return;
    const value = half ? index + 0.5 : index + 1;
    onChange(value);
  };

  const handleMouseClick = (index: number, e: React.MouseEvent<SVGSVGElement>) => {
    if (readOnly || !onChange) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const half = e.clientX - rect.left < rect.width / 2;
    handleClick(index, half);
  };

  const isInteractive = !readOnly && !!onChange;
  const ratingText = `${clampedRating} out of ${maxStars} stars`;

  // Interactive: arrow keys change the rating in half-star steps
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isInteractive) return;
    const step: Record<string, number> = {
      ArrowRight: 0.5,
      ArrowUp: 0.5,
      ArrowLeft: -0.5,
      ArrowDown: -0.5,
    };
    let next: number | undefined;
    if (e.key in step) next = clampedRating + step[e.key];
    else if (e.key === 'Home') next = 0.5;
    else if (e.key === 'End') next = maxStars;
    if (next === undefined) return;
    e.preventDefault();
    onChange(Math.min(Math.max(next, 0.5), maxStars));
  };

  return (
    <div
      className={`bsr-star-rating${isInteractive ? ' bsr-star-rating--interactive' : ''} ${className}`}
      style={{ gap: `4px` }}
      {...(isInteractive
        ? {
            role: 'slider',
            tabIndex: 0,
            'aria-label': 'Rating',
            'aria-valuemin': 0,
            'aria-valuemax': maxStars,
            'aria-valuenow': clampedRating,
            'aria-valuetext': ratingText,
            onKeyDown: handleKeyDown,
          }
        : { role: 'img', 'aria-label': ratingText })}
    >
      {Array.from({ length: maxStars }, (_, i) => (
        <StarIcon
          key={i}
          id={`${instanceId}-star-${i}`}
          fill={getFill(i)}
          size={size ?? 'var(--bsr-icon-size-md)'}
          onClick={isInteractive ? (e) => handleMouseClick(i, e) : undefined}
        />
      ))}
    </div>
  );
};
