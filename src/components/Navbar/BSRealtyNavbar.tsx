import './BSRealtyNavbar.css';
import { ChevronDownIcon } from '../../icons/icons';

export interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export interface BSRealtyNavbarProps {
  /** Image src for the logo */
  logo?: string;
  /** Navigation items */
  navItems?: NavItem[];
  /** Label of the currently active nav item */
  activeItem?: string;
  /** Called when the Login button is clicked */
  onLoginClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Properties', hasDropdown: true },
  { label: 'Financing', hasDropdown: true },
  { label: 'Property Services', hasDropdown: true },
  { label: 'Education', hasDropdown: true },
  { label: 'About', hasDropdown: true },
  { label: 'Contact', hasDropdown: false },
];

export function BSRealtyNavbar({
  logo = '/Primary_Logo.png',
  navItems = DEFAULT_NAV_ITEMS,
  activeItem,
  onLoginClick,
}: BSRealtyNavbarProps) {
  return (
    <nav className="bsr-navbar" aria-label="Main navigation">
      {/* Logo */}
      <a href="/" className="bsr-navbar__logo-link" aria-label="BS Realty home">
        <img
          className="bsr-navbar__logo"
          src={logo}
          alt="BS Realty LLC"
        />
      </a>

      {/* Navigation links */}
      <ul className="bsr-navbar__links" role="list">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href ?? '#'}
              className={`bsr-navbar__link${activeItem === item.label ? ' bsr-navbar__link--active' : ''}`}
              aria-current={activeItem === item.label ? 'page' : undefined}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDownIcon size={20} className="bsr-navbar__chevron" />}
            </a>
          </li>
        ))}
      </ul>

      {/* Login button */}
      <button
        type="button"
        className="bsr-navbar__login"
        onClick={onLoginClick}
      >
        Login
      </button>
    </nav>
  );
}

export default BSRealtyNavbar;
