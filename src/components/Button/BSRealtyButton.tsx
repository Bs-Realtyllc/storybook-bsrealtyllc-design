import './BSRealtyButton.css';
import type { Disableable } from '../../types/shared';
import { iconSizeStyle, type IconSizeToken } from '../../icons/iconSize';

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


const iconSizeMap: Record<ButtonSize, IconSizeToken> = {
  'xs': 'xs',          // 14px
  'xs-medium': 'xs',   // 14px
  'small': 'sm',       // 16px
  'medium': 'md',      // 18px
  'large': 'lg',       // 20px
  'xl': 'xl',          // 22px
  '2xl': '2xl',        // 24px
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
  const iconStyle = iconSizeStyle(iconSizeMap[size]);

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
        <span className="bsr-btn__icon bsr-btn__icon--left" style={iconStyle}>
          {leftIcon}
        </span>
      )}
      <span>{label}</span>
      {showRightIcon && rightIcon
        && (
          <span className="bsr-btn__icon bsr-btn__icon--right" style={iconStyle}>
            {rightIcon}
          </span>
        )}
    </button>
  );
};
