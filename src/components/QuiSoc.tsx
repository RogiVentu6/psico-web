import { useTranslation } from 'react-i18next';
import { FiCheck } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';
import ImagePlaceholder from './ImagePlaceholder';
import { cursosKeys } from '../data/site';
import './QuiSoc.css';

export default function QuiSoc() {
  const { t } = useTranslation();

  return (
    <section id="quiSoc" className="section section--cream">
      <div className="container quiSoc__inner">
        <AnimatedSection className="quiSoc__media">
          <div className="quiSoc__media-frame">
            <ImagePlaceholder label={t('quiSoc.imageAlt')} ratio="3 / 4" />
          </div>
          <div className="quiSoc__media-accent" aria-hidden="true" />
        </AnimatedSection>

        <AnimatedSection className="quiSoc__content" delay={0.1}>
          <span className="section-head__eyebrow">{t('quiSoc.subtitle')}</span>
          <h2 className="quiSoc__title">{t('quiSoc.title')}</h2>
          <div className="section-head__rule quiSoc__rule" />
          <p>{t('quiSoc.p1')}</p>
          <p>{t('quiSoc.p2')}</p>
          <p>{t('quiSoc.p3')}</p>

          <h3 className="quiSoc__cursos-title">{t('quiSoc.cursosTitle')}</h3>
          <ul className="quiSoc__cursos">
            {cursosKeys.map((c) => (
              <li key={c}>
                <FiCheck className="quiSoc__check" />
                {t(`quiSoc.cursos.${c}`)}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
