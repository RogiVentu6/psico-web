import './ImagePlaceholder.css';

interface Props {
  label?: string;
  ratio?: string; // e.g. '3 / 4', '4 / 3'
  rounded?: boolean;
  className?: string;
}

// Placeholder visual mientras no hay fotos reales.
// Sustituir por <img src=... alt=... /> cuando esten disponibles.
export default function ImagePlaceholder({
  label = 'Foto',
  ratio = '3 / 4',
  rounded = true,
  className = '',
}: Props) {
  return (
    <div
      className={`img-ph ${rounded ? 'img-ph--rounded' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="img-ph__icon" fill="none">
        <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M4.5 19.5c1.2-3.2 4-5 7.5-5s6.3 1.8 7.5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="img-ph__label">{label}</span>
    </div>
  );
}
