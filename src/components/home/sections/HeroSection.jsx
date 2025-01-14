import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LandingVideo from "../../../../public/videos/Landing.mp4";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
  };

  return (
    <>
      {/* 히어로 섹션 */}
      <div className="absolute top-0 left-0 right-0 h-screen w-full overflow-hidden">
        {/* 비디오 배경 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={LandingVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* 오버레이 */}
        <div className="absolute inset-0 z-10 bg-black/65" />

        {/* 컨텐츠 */}
        <div className="relative z-20 h-full container mx-auto flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            자료 관리의 시작과 끝
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-100"
          >
            Ceep으로 모든 걸 간편하게.
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => scrollToSection('features')}
            className="px-8 py-4 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            기능 알아보기
          </motion.button>

          {/* 스크롤 인디케이터 */}
          <motion.div 
            className="absolute bottom-10 cursor-pointer"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={scrollToNext}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>

          {/* freefik Attribution 링크 */}
          <a 
            href="https://kr.freepik.com/free-video/animation-network-connections-cloud-computing_1916616#fromView=resource_detail&position=0&from_element=related_resources"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 text-xs text-gray-700 hover:text-white transition-colors z-30"
          >
            Designed by Freepik - Video: VectorFusionArt
          </a>
        </div>
      </div>

      {/* 스크롤을 위한 빈 공간 */}
      <div className="h-screen w-full" />
    </>
  );
};

export default HeroSection;