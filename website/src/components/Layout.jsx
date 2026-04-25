import Background from './Background';
import Header from './Header';
import './Layout.css';

export default function Layout({ children, showHeader = true, backgroundVariant = 'default' }) {
  const getBackgroundProps = () => {
    switch (backgroundVariant) {
      case 'home':
        return { variant: 'home' };
      default:
        return { variant: backgroundVariant };
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
