import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoWhite from '../../../public/images/ceep_logo_wn.png';
import LogoBlack from '../../../public/images/ceep_logo_bn.png';

export const Header = () => {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 64;
      setIsHeroSection(window.scrollY <= heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴가 열려있을 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 섹션 스크롤 함수 추가
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeroSection 
            ? 'bg-transparent' 
            : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container mx-auto">
          <nav className="flex items-center justify-between py-4">
            <div 
              className="h-8 cursor-pointer" 
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToTop();
                }
              }}
            >
              <img 
                src={isHeroSection ? LogoWhite : LogoBlack} 
                alt="CEEP Logo" 
                className="h-full w-auto object-contain transition-opacity duration-300"
              />
            </div>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex items-center gap-8">
            <Link 
                to="/" 
                className={`transition-colors ${
                  isHeroSection 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                제품
              </Link>
              <button 
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('features');
                      if (element) {
                        const headerHeight = 64;
                        const elementPosition = element.offsetTop - headerHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  } else {
                    scrollToSection('features');
                  }
                }}
                className={`transition-colors py-2 text-left ${
                  isHeroSection 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                기능
              </button>
              <Link 
                to="/company" 
                className={`transition-colors ${
                  isHeroSection 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                회사
              </Link>
              <a 
                href="https://ceep.kr"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg transition-all ${
                  isHeroSection 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                무료로 Ceep 시작하기
              </a>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="flex items-center gap-4 md:hidden">
              <a 
                href="https://ceep.kr"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg transition-all ${
                  isHeroSection 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                시작하기
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 ${
                  isHeroSection ? 'text-white' : 'text-gray-900'
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 모바일 사이드 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            
            {/* 사이드 메뉴 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl"
            >
              <div className="p-4">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X size={24} />
                  </button>
                </div>
                <Link 
                  to="/"
                  className="text-gray-600 hover:text-gray-900 py-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  제품
                </Link>
                <div className="flex flex-col gap-4 mt-8">
                  <button 
                    onClick={() => {
                      if (location.pathname !== '/') {
                        navigate('/');
                        setTimeout(() => {
                          const element = document.getElementById('features');
                          if (element) {
                            const headerHeight = 64;
                            const elementPosition = element.offsetTop - headerHeight;
                            window.scrollTo({
                              top: elementPosition,
                              behavior: 'smooth'
                            });
                          }
                        }, 100);
                      } else {
                        scrollToSection('features');
                      }
                    }}
                    className="text-gray-600 hover:text-gray-900 py-2 text-left"
                  >
                    기능
                  </button>
                  <Link 
                    to="/company"
                    className="text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    회사
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};