import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiAward } from 'react-icons/fi';
import SectionHead from './SectionHead';
import { estudisKeys } from '../data/site';
import './Estudis.css';

export default function Estudis() {
  const { t } = useTranslation();

  return (
    <section id="estudis" className="section">
      <div className="container">
        <SectionHead
          eyebrow={t('estudis.subtitle')}
          title={t('estudis.title')}
          intro={t('estudis.intro')}
        />

        <ol className="estudis__timeline">
          {estudisKeys.map((key, i) => (
            <motion.li
              key={key}
              className="estudis__item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <span className="estudis__dot">
                <FiAward />
              </span>
              <div className="estudis__content">
                <span className="estudis__year">
                  {t(`estudis.items.${key}.year`)}
                </span>
                <h3 className="estudis__title">
                  {t(`estudis.items.${key}.title`)}
                </h3>
                <p className="estudis__place">
                  {t(`estudis.items.${key}.place`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
