// NavLink.tsx
import Link from 'next/link'

interface NavLinkProps {
  href: string
  label: string
  className?: string
}

export const NavLink = ({ href, label, className }: NavLinkProps) => (
  <Link href={href} className={className}>
    {label}
  </Link>
)