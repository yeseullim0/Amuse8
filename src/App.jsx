import './styles/globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import HeroSection from './components/home/sections/HeroSection';
import MainContent from './components/home/MainContent';
import CompanyPage from './components/pages/CompanyPage';
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';

// 메인 페이지 컴포넌트로 분리
const Home = () => {
  return (
    <>
      <HeroSection />
      <MainContent />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;