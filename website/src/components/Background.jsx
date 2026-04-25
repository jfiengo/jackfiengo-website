import './Background.css';

export default function Background({ variant = 'default' }) {
  return (
    <div className={`background background-${variant}`}>
      <div className="ambient-orb orb-one"></div>
      <div className="ambient-orb orb-two"></div>
      <div className="ambient-orb orb-three"></div>
      <div className="grid"></div>
      <div className="noise"></div>
    </div>
  );
}
