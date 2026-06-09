import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitch from './LanguageSwitch';
import './Navbar.css';

const links = [
  { id: 'inici', key: 'nav.inici' },
  { id: 'serveis', key: 'nav.serveis' },
  { id: 'estudis', key: 'nav.estudis' },
  { id: 'quiSoc', key: 'nav.quiSoc' },
  { id: 'contacta', key: 'nav.contacta' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Evita el scroll del body cuando el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#inici" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-name">Patricia Ortiz</span>
          <span className="nav__brand-sub">Psicologia</span>
        </a>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)}>
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__menu-lang">
            <LanguageSwitch />
          </div>
        </nav>

        <div className="nav__actions">
          <div className="nav__desktop-lang">
            <LanguageSwitch />
          </div>
          <button
            type="button"
            className="nav__toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
