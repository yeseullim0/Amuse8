import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureIntroSection = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  
    const topTags = ['#자동 라벨링', '#자동 분류', '#자동 정리', '#문서 분석', '#태그 요약'];
    const bottomTags = ['#유사 정보 통합', '#부분 스크랩', '#빠른 검색', '#키워드 추출'];
  
    return (
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="max-w-7xl mx-auto text-center space-y-24" // 간격 늘림
          >
            {/* 메인 텍스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8" // 간격 늘림
            >
              <p className="text-blue-600 font-semibold text-2xl"> {/* 텍스트 크기 증가 */}
                복잡한 자료 3초만에 정리 끝!
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900"> {/* 텍스트 크기 증가 */}
                가장 스마트한<br />
                <span className="text-blue-600">AI 클라우드 Ceep</span>
              </h2>
            </motion.div>
  
            {/* 태그 슬라이더 */}
            <div className="space-y-8 overflow-hidden"> {/* 간격 늘림 */}
              {/* 첫 번째 줄 태그 */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex justify-center gap-6 flex-wrap" // 간격 늘림
              >
                {topTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="px-8 py-4 bg-white rounded-full text-blue-600 text-xl border border-blue-200 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer" // 크기와 패딩 증가
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
  
              {/* 두 번째 줄 태그 */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex justify-center gap-6 flex-wrap" // 간격 늘림
              >
                {bottomTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="px-8 py-4 bg-white rounded-full text-blue-600 text-xl border border-blue-200 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer" // 크기와 패딩 증가
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
  
            {/* 추가 설명 텍스트 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-2xl text-gray-600" // 텍스트 크기 증가
            >
              AI가 자동으로 분류하고 정리하여<br />
              필요한 정보를 더 쉽게 찾을 수 있습니다
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  };

export default FeatureIntroSection;