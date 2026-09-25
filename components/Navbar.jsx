import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
      <span className="font-bold text-xl">MyPortfolio</span>
      <div className="space-x-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-blue-600">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}