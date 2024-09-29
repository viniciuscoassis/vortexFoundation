// NavMenu.tsx
import { NavLink } from './NavLink'
import navLinks from '@/data/navLinks.json'

interface NavMenuProps {
  className?: string
  linkClassName?: string
}

export const NavMenu = ({ className, linkClassName }: NavMenuProps) => (
  <nav className={className}>
    {navLinks.mainLinks.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        label={link.label}
        className={linkClassName}
      />
    ))}
  </nav>
)