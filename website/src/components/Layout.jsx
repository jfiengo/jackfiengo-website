import Background from './Background';
import Masthead from './Masthead';
import Colophon from './Colophon';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="page">
      <Background />
      <Masthead />
      {children}
      <Colophon />
    </div>
  );
}
