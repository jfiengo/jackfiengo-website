import Background from './Background';
import Header from './Header';
import './Layout.css';

export default function Layout({ children, showHeader = true, backgroundVariant = 'default' }) {
  const getBackgroundProps = () => {
    switch (backgroundVariant) {
      case 'home':
        return { includeBouncingBall: true, includeCircles: true };
      default:
        return { includeBouncingBall: false, includeCircles: false };
    }
  };

  return (
    <div className={`container ${backgroundVariant}`}>
      <Background {...getBackgroundProps()} />
      {showHeader && <Header />}
      {children}
    </div>
  );
}
