import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDownRight } from 'react-icons/fi';
import ImagePlaceholder from './ImagePlaceholder';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inici" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <motion.span
            className="hero__eyebrow"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            {t('hero.eyebrow')}
          </motion.span>
          <motion.h1
            className="hero__title"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            {t('hero.title')}
            <span className="hero__title-sub">{t('hero.subtitle')}</span>
          </motion.h1>
          <motion.p
            className="hero__tagline"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            {t('hero.tagline')}
          </motion.p>
          <motion.p
            className="hero__intro"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
          >
            {t('hero.intro')}
          </motion.p>
          <motion.div
            className="hero__actions"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
          >
            <a href="#contacta" className="btn btn--primary">
              {t('hero.cta')} <FiArrowDownRight />
            </a>
            <a href="#quiSoc" className="btn btn--ghost">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="hero__media-frame">
            <ImagePlaceholder label={t('hero.imageAlt')} ratio="4 / 5" />
          </div>
          <div className="hero__media-accent" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
