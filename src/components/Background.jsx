import './Background.css';

export default function Background({ includeBouncingBall = false, includeCircles = false }) {
  return (
    <div className="background">
      {includeBouncingBall && <div className="bouncing-ball"></div>}

      <div className="grid"></div>

      {includeCircles && (
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}

      <div className="noise"></div>
    </div>
  );
}
