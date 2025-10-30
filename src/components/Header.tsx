import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Услуги', href: '#services' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Программы', href: '#programs' },
    { name: 'Результаты', href: '#results' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Прайс', href: '#pricing' },
    { name: 'Статьи', href: '#blog' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Dumbbell" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">FitCoach</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>

          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Записаться
          </a>
        </div>

        {isMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;