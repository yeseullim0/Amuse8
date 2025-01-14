import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import notebookImage from '../../../../public/images/notebook.png';
import videoFile from '../../../../public/videos/file.mp4';
import videoExtension from '../../../../public/videos/extension.mp4';

const FeaturesSection = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="features" className="py-20 bg-white">
      {/* 첫 번째 기능 */}
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            ref={firstRef}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* 왼쪽 노트북 + 비디오 */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={firstInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto relative"
            >
            <img
                src={notebookImage}
                alt="노트북 화면"
                className="w-full h-auto rounded-lg shadow-xl "
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[526px] h-[303px] object-cover rounded-lg transform translate-y-[-22%]"
                >
                <source src={videoFile} type="video/mp4" />
                </video>
            </div>
            </motion.div>


            {/* 오른쪽 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={firstInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-right"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                한번의 드래그로<br />한번의 정리
              </h3>
              <p className="text-xl md:text-2xl text-gray-600">
                AI가 문서를 분석하고, 적합한 카테고리로 정리합니다.<br />
                더 효율적인 작업 환경을 경험해보세요.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 두 번째 기능 */}
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            ref={secondRef}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* 왼쪽 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={secondInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:order-1"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                확장프로그램으로<br />한 번에 저장
              </h3>
              <p className="text-xl md:text-2xl text-gray-600">
                텍스트는 한 번의 드래그로,<br />
                페이지는 한 번의 클릭으로 <br />
                원하는 정보, 쉽고 빠르게 저장하세요.
              </p>
              {/* 추가된 CTA 버튼 */}
                <a
                    href="https://chromewebstore.google.com/detail/ceep/oopjbacappkhdjmokaaeiinjcodchgia?authuser=0&hl=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg"
                >
                    Chrome 확장프로그램 설치하기
                </a>
            </motion.div>

            {/* 오른쪽 노트북 + 비디오 */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={secondInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-3xl mx-auto md:order-2 relative"
                >
                    <img
                        src={notebookImage}
                        alt="노트북 화면"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-[526px] h-[303px] object-cover rounded-lg transform translate-y-[-22%]"
                        >
                        <source src={videoExtension} type="video/mp4" />
                        </video>
                    </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;