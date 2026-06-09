import AnimatedSection from './AnimatedSection';

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function SectionHead({ eyebrow, title, intro }: Props) {
  return (
    <AnimatedSection className="section-head">
      <span className="section-head__eyebrow">{eyebrow}</span>
      <h2 className="section-head__title">{title}</h2>
      <div className="section-head__rule" />
      {intro && <p className="section-head__intro">{intro}</p>}
    </AnimatedSection>
  );
}
