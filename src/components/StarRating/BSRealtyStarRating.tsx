import './BSRealtyStarRating.css';

export interface BSRealtyStarRatingProps {
  /** Rating value between 0 and 5, supports 0.5 increments */
  rating: number;
  /** Total number of stars */
  maxStars?: number;
  /** Size of each star in px */
  size?: number;
  /** Allow interactive rating selection */
  readOnly?: boolean;
  /** Called when user selects a rating (readOnly must be false) */
  onChange?: (rating: number) => void;
}

const StarIcon = ({
  id,
  fill,
  size,
}: {
  id: string;
  fill: 'full' | 'half' | 'empty';
  size: number;
}) => {
  const starPath =
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

  const clipId = `half-clip-${id}`;

  return (
    <svg
      className="bsr-star"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {fill === 'half' && (
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>
        </defs>
      )}

      {/* Empty (gray) base */}
      <path d={starPath} fill="#D1D5DB" />

      {/* Filled overlay */}
      {fill === 'full' && <path d={starPath} fill="#FFC500" />}
      {fill === 'half' && (
        <path d={starPath} fill="#FFC500" clipPath={`url(#${clipId})`} />
      )}
    </svg>
  );
};

export const BSRealtyStarRating = ({
  rating,
  maxStars = 5,
  size = 18,
  readOnly = true,
  onChange,
}: BSRealtyStarRatingProps) => {
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

  return (
    <div
      className={`bsr-star-rating${readOnly ? '' : ' bsr-star-rating--interactive'}`}
      role="img"
      aria-label={`${clampedRating} out of ${maxStars} stars`}
      style={{ gap: `4px` }}
    >
      {Array.from({ length: maxStars }, (_, i) => (
        <StarIcon
          key={i}
          id={`star-${i}`}
          fill={getFill(i)}
          size={size}
        />
      ))}
    </div>
  );
};
