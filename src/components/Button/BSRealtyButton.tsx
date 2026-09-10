import './BSRealtyButton.css';
import type { Disableable } from '../../types/shared';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'xs' | 'xs-medium' | 'small' | 'medium' | 'large' | 'xl' | '2xl';

export interface BSRealtyButtonProps extends Disableable {
  /** Button label */
  label?: string;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether to show the left icon */
  showLeftIcon?: boolean;
  /** Whether to show the right icon */
  showRightIcon?: boolean;
  /** Click handler */
  onClick?: () => void;
}

// MessageCircle icon
const MessageCircleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// ArrowRight icon
const ArrowRightIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const iconSizeMap: Record<ButtonSize, number> = {
  'xs': 14,
  'xs-medium': 14,
  'small': 16,
  'medium': 18,
  'large': 20,
  'xl': 22,
  '2xl': 24,
};

export const BSRealtyButton = ({
  label = 'Buttons',
  variant = 'primary',
  size = 'medium',
  showLeftIcon = true,
  showRightIcon = true,
  disabled = false,
  onClick,
}: BSRealtyButtonProps) => {
  const iconSize = iconSizeMap[size];

  return (
    <button
      type="button"
      className={[
        'bsr-btn',
        `bsr-btn--${variant}`,
        `bsr-btn--${size}`,
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {showLeftIcon && <MessageCircleIcon size={iconSize} />}
      <span>{label}</span>
      {showRightIcon && <ArrowRightIcon size={iconSize} />}
    </button>
  );
};
