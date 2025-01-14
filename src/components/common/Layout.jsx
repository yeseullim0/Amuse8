import PropTypes from 'prop-types';  
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  // 헤더를 숨길 경로들
  const hiddenPaths = ['/terms', '/privacy'];
  const shouldHideHeader = hiddenPaths.includes(window.location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideHeader && <Header />}
      <main className={`flex-1 ${!shouldHideHeader && 'pt-16'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// props 타입 정의
Layout.propTypes = {
  children: PropTypes.node.isRequired
};