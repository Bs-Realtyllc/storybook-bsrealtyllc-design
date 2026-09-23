import './BSRealtyAvatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BSRealtyAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. When omitted (or when it fails to load), falls back to initials. */
  src?: string;
  /** Accessible label / alt text for the image */
  name: string;
  /** Size of the avatar */
  size?: AvatarSize;
}

/** Turns "Jane Doe" into "JD", "Cher" into "C". */
const getInitials = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

export const BSRealtyAvatar = ({ src, name, size = 'md', className = '', ...props }: BSRealtyAvatarProps) => {
  return (
    <span {...props} className={['bsr-avatar', `bsr-avatar--${size}`, className].join(' ')}>
      {src ? (
        <img
          className="bsr-avatar__image"
          src={src}
          alt={name}
          // If the image fails to load, hide it so the initials
          // fallback underneath (rendered unconditionally) shows instead.
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
      <span className="bsr-avatar__initials" aria-hidden={!!src}>
        {getInitials(name)}
      </span>
    </span>
  );
};
