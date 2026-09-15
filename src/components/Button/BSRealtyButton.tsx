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
  /**LeftIcon  */
  leftIcon?: React.ReactNode;
  /**RightIcon  */
  rightIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /**button type */
  type?: 'button' | 'submit' | 'reset';
  /**ClassName */
  className?: string;
}


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
  type = 'button',
  label = 'Buttons',
  variant = 'primary',
  size = 'medium',
  showLeftIcon = true,
  showRightIcon = true,
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
  className = ''
}: BSRealtyButtonProps) => {
  const iconSize = iconSizeMap[size];

  return (
    <button
      type={type}
      className={[
        'bsr-btn',
        `bsr-btn--${variant}`,
        `bsr-btn--${size}`, className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {showLeftIcon && leftIcon && (
        <span className="bsr-btn__icon bsr-btn__icon--left" style={{ width: iconSize, height: iconSize }}>
          {leftIcon}
        </span>
      )}
      <span>{label}</span>
      {showRightIcon && rightIcon
        && (
          <span className="bsr-btn__icon bsr-btn__icon--right" style={{ width: iconSize, height: iconSize }}>
            {rightIcon}
          </span>
        )}
    </button>
  );
};
