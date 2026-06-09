import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';

const langs = [
  { code: 'ca', label: 'CA' },
  { code: 'es', label: 'ES' },
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('es') ? 'es' : 'ca';

  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Idioma">
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-switch__btn ${current === l.code ? 'is-active' : ''}`}
          aria-pressed={current === l.code}
          onClick={() => i18n.changeLanguage(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
