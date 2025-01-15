import { motion } from 'framer-motion';

const EndingSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          src="/images/block.jpg"
          alt="Block background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 텍스트 오버레이 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-4">
          Ceep로<br />쌓아 두기만 하세요.
        </h2>
      </motion.div>

      {/* 출처 링크 */}
      <div className="absolute bottom-4 left-4">
        <a 
          href="https://kr.freepik.com/free-photo/small-cubes-held-hand_6404803.htm#fromView=image_search_similar&page=1&position=3&uuid=e0a7206d-19d0-412d-b631-dbd2ffc28948&new_detail=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-sm transition-colors duration-200"
        >
          출처 freepik
        </a>
      </div>
    </section>
  );
};

export default EndingSection;