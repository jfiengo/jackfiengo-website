import './Background.css';

export default function Background({ variant = 'default' }) {
  return (
    <div className={`background background-${variant}`}>
      <div className="grid-paper"></div>
      <div className="noise"></div>
    </div>
  );
}
