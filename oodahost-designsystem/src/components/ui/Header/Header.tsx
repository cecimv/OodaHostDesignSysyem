import * as React from 'react';
import { ButtonLightmode } from '../Button/Button-Lightmode';

type HeaderVariantColor = 'white' | 'light-gray' | 'gradient';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  navLinks?: NavLink[];
  showSearch?: boolean;
  showUserMenu?: boolean;
  userName?: string;
  userAvatarUrl?: string;
  buttonLabel?: string;
  buttonHref?: string;
  variant?: HeaderVariantColor;
}

export const Header: React.FC<HeaderProps> = ({
  logoText = 'OODA',
  navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
  ],
  
  buttonLabel = 'Get started',
  buttonHref = '/get-started',
  variant = 'white',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const getVariantClasses = (variant: HeaderVariantColor) => {
    switch (variant) {
      case 'white':
        return {
          container: 'bg-white text-gray-800',
          logoText: 'text-gray-800',
          logoIconBg: 'bg-gray-800',
          navLink: 'text-gray-600 hover:text-[#FFFFFF]',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          mobileMenuBg: 'bg-white',
          mobileLink: 'text-gray-700 hover:text-blue-600',
          mobileMenuButton: 'text-gray-700 hover:text-blue-600',
        };
      // ...otros casos omitidos por brevedad
      default:
        return {
          container: 'bg-white text-gray-800',
          logoText: 'text-gray-800',
          logoIconBg: 'bg-gray-800',
          navLink: 'text-gray-600 hover:text-[#FFFFFF]',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          mobileMenuBg: 'bg-white',
          mobileLink: 'text-gray-700 hover:text-[#FFFFFF]',
          mobileMenuButton: 'text-gray-700 hover:text-[#FFFFFF]',
        };
    }
  };

  const variantClasses = getVariantClasses(variant);

  return (
    <header
      className={`
        ${variantClasses.container}
        shadow-md rounded-xl px-6 py-4
        flex items-center justify-between
        max-w-screen-xl mx-auto relative z-10
      `}
    >
      {/* LOGO */}
      <a href="/" className={`flex items-center text-2xl font-bold ${variantClasses.logoText}`}>
        <span
          className={`
            ${variantClasses.logoIconBg}
            w-7 h-7 rounded mr-2
            flex items-center justify-center text-white font-semibold
          `}
        >
          O
        </span>
        {logoText}
      </a>

      {/* NAVIGATION LINKS */}
      <nav className="hidden md:flex items-center gap-x-16 ml-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`
              ${variantClasses.navLink}
              text-lg font-medium transition duration-300
            `}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* RIGHT SECTION (BUTTON, SEARCH, USER) */}
      <div className="hidden md:flex items-center space-x-4">
      
        {/* GET STARTED BUTTON */}
        {buttonLabel && (
          <ButtonLightmode
            variant="outlineTextOnly"
            type="submit"
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            {buttonLabel}
          </ButtonLightmode>
        )}
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className={`text-3xl ${variantClasses.mobileMenuButton}`}
        >
          ;
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div
          className={`
            ${variantClasses.mobileMenuBg}
            absolute top-full left-0 w-full
            shadow-lg rounded-b-xl
            md:hidden flex flex-col space-y-4 p-4
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                ${variantClasses.mobileLink}
                text-lg font-medium text-center py-2 hover:bg-gray-100 rounded
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {buttonLabel && (
            <a
              href={buttonHref}
              className={`
                ${variantClasses.button}
                block text-center mt-4
                px-6 py-2 rounded-lg text-lg font-semibold
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {buttonLabel}
            </a>
          )}
        </div>
      )}
    </header>
  );
};
