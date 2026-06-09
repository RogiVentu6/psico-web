import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FiUser,
  FiHeart,
  FiActivity,
  FiClipboard,
  FiSmile,
  FiVideo,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import SectionHead from './SectionHead';
import { serveisKeys } from '../data/site';
import './Serveis.css';

const icons: Record<string, IconType> = {
  terapiaIndividual: FiUser,
  terapiaParella: FiHeart,
  ansietat: FiActivity,
  diagnostic: FiClipboard,
  adolescents: FiSmile,
  online: FiVideo,
};

export default function Serveis() {
  const { t } = useTranslation();

  return (
    <section id="serveis" className="section section--tint">
      <div className="container">
        <SectionHead
          eyebrow={t('serveis.subtitle')}
          title={t('serveis.title')}
          intro={t('serveis.intro')}
        />

        <div className="serveis__grid">
          {serveisKeys.map((key, i) => {
            const Icon = icons[key];
            return (
              <motion.article
                key={key}
                className="serveis__card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <span className="serveis__icon">
                  <Icon />
                </span>
                <h3 className="serveis__card-title">
                  {t(`serveis.items.${key}.title`)}
                </h3>
                <p className="serveis__card-desc">
                  {t(`serveis.items.${key}.desc`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
