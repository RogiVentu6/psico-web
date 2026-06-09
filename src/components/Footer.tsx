import { useTranslation } from 'react-i18next';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { site } from '../data/site';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Patricia Ortiz</span>
          <span className="footer__tagline">{t('footer.tagline')}</span>
        </div>

        <div className="footer__contact">
          <a href={`mailto:${site.email}`}>
            <FiMail /> {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`}>
            <FiPhone /> {site.phoneDisplay}
          </a>
        </div>

        <div className="footer__social">
          <span>{t('footer.follow')}</span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__ig"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {year} Patricia Ortiz. {t('footer.rights')}
          </span>
          <span className="footer__legal">{t('footer.legal')}</span>
        </div>
      </div>
    </footer>
  );
}
