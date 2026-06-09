import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import SectionHead from './SectionHead';
import { site } from '../data/site';
import './Contacta.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailjsReady = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type Status = 'idle' | 'sending' | 'success' | 'error' | 'notConfigured';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contacta() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [validationKey, setValidationKey] = useState<string | null>(null);

  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationKey(null);

    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = (data.get('user_name') as string)?.trim();
    const email = (data.get('user_email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setValidationKey('contacta.required');
      return;
    }
    if (!emailRe.test(email)) {
      setValidationKey('contacta.invalidEmail');
      return;
    }

    if (!emailjsReady) {
      setStatus('notConfigured');
      return;
    }

    try {
      setStatus('sending');
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacta" className="section section--tint">
      <div className="container">
        <SectionHead
          eyebrow={t('contacta.subtitle')}
          title={t('contacta.title')}
          intro={t('contacta.intro')}
        />

        <div className="contacta__grid">
          <AnimatedSection className="contacta__direct">
            <h3 className="contacta__direct-title">{t('contacta.directTitle')}</h3>

            <a className="contacta__link" href={`mailto:${site.email}`}>
              <span className="contacta__link-icon"><FiMail /></span>
              <span className="contacta__link-text">
                <strong>{t('contacta.email')}</strong>
                {site.email}
              </span>
            </a>

            <a className="contacta__link" href={`tel:${site.phoneTel}`}>
              <span className="contacta__link-icon"><FiPhone /></span>
              <span className="contacta__link-text">
                <strong>{t('contacta.phone')}</strong>
                {site.phoneDisplay}
              </span>
            </a>

            <a
              className="contacta__link"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contacta__link-icon contacta__link-icon--wa">
                <FaWhatsapp />
              </span>
              <span className="contacta__link-text">
                <strong>{t('contacta.whatsapp')}</strong>
                {site.phoneDisplay}
              </span>
            </a>

            <a
              className="contacta__link"
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contacta__link-icon contacta__link-icon--ig">
                <FiInstagram />
              </span>
              <span className="contacta__link-text">
                <strong>{t('contacta.instagram')}</strong>
                @{site.instagramUser}
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection className="contacta__form-wrap" delay={0.1}>
            <h3 className="contacta__form-title">{t('contacta.formTitle')}</h3>
            <form ref={formRef} className="contacta__form" onSubmit={handleSubmit} noValidate>
              <label className="contacta__field">
                <span>{t('contacta.name')}</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder={t('contacta.namePlaceholder')}
                  autoComplete="name"
                />
              </label>

              <label className="contacta__field">
                <span>{t('contacta.yourEmail')}</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder={t('contacta.emailPlaceholder')}
                  autoComplete="email"
                />
              </label>

              <label className="contacta__field">
                <span>{t('contacta.message')}</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t('contacta.messagePlaceholder')}
                />
              </label>

              {validationKey && (
                <p className="contacta__msg contacta__msg--warn">{t(validationKey)}</p>
              )}
              {status === 'success' && (
                <p className="contacta__msg contacta__msg--ok">{t('contacta.success')}</p>
              )}
              {status === 'error' && (
                <p className="contacta__msg contacta__msg--err">{t('contacta.error')}</p>
              )}
              {status === 'notConfigured' && (
                <p className="contacta__msg contacta__msg--warn">
                  {t('contacta.notConfigured')}
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary contacta__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('contacta.sending') : t('contacta.send')}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
