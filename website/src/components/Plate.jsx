import './Plate.css';

export default function Plate({ src, alt, caption, ratio = '3 / 4', colorOnHover = false, className = '', loading = 'lazy' }) {
  const classes = ['plate', colorOnHover ? 'plate--color-on-hover' : '', className].filter(Boolean).join(' ');

  return (
    <figure className={classes}>
      <div className="plate-frame" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} loading={loading} fetchPriority={loading === 'eager' ? 'high' : undefined} />
      </div>
      {caption && <figcaption className="plate-caption folio">{caption}</figcaption>}
    </figure>
  );
}
