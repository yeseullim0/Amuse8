import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Target, Globe, Star, Code, ExternalLink } from 'lucide-react';



const CompanyPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6 }
  };

  // 파티클 효과를 위한 배열
  // const particles = Array.from({ length: 50 });

  return (
    <div className="bg-white">
      {/* 히어로 섹션 - 이미지 배경 */}
        <section className="min-h-screen text-white flex items-center relative overflow-hidden -mt-16">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
            <img 
            src="/images/Company.jpg"
            alt="Company Background" 
            className="w-full h-full object-cover"
            />
            {/* 이미지 위에 오버레이 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
            <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl text-gray-300 font-bold leading-relaxed">
                모든 사람이 정보를 더 쉽게 관리하고<br />
                활용할 수 있는 세상을 만듭니다
            </p>
            </div>
        </div>
        {/* 이미지 출처 */}
        <div className="absolute bottom-4 right-4 text-sm text-gray-700 z-20">
            <a 
            href="https://kr.freepik.com/free-photo/checking-data-laptop_5535861.htm#fromView=search&page=1&position=2&uuid=6025a01e-3c8c-4a3f-899e-470ddb7ef505&new_detail=true"
            target="_blank"
            rel="noopener noreferrer"
            >
            작가 pressfoto 출처 Freepik
            </a>
        </div>
        </section>

      {/* 브랜드 스토리 섹션 - 더욱 인터랙티브한 디자인 */}
      <section className="py-32 bg-white relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-6xl mx-auto space-y-32"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="relative w-64 mx-auto"
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={{ once: true }}
              >
                <img 
                  src="/images/Amuse8.png"
                  alt="Amuse8 Logo" 
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.p 
                className="text-xl text-gray-600 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                AI 기술로 만드는 즐거운 한 입 거리 서비스
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-24">
                {[
                  {
                    icon: <Code className="w-6 h-6 text-blue-600" />,
                    title: "AI + muse",
                    meaning: "MEANING 01",
                    description: "인공지능을 깊이 있게 연구하고 생각하여\n혁신적인 솔루션을 제공합니다.",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-blue-600" />,
                    title: "Amuse (프랑스어)",
                    meaning: "MEANING 02",
                    description: "코스요리의 시작을 알리는 '한 입 거리' 처럼\n새로운 디지털 경험의 시작을 제공합니다.",
                    gradient: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute -inset-4 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(to right, ${hoveredCard === index ? 'var(--tw-gradient-from), var(--tw-gradient-to)' : 'transparent, transparent'})`,
                      }}
                    />
                    <motion.div 
                      className="p-8 bg-white rounded-2xl space-y-6 shadow-lg relative border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center relative">
                        {item.icon}
                        <motion.div
                          className="absolute inset-0 bg-blue-200 rounded-xl"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.2, opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="text-blue-600 font-semibold">{item.meaning}</span>
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>

                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-24">
                {[
                  {
                    icon: <Star className="w-6 h-6 text-blue-600" />,
                    title: "Amuse (영어)",
                    meaning: "MEANING 03",
                    description: "즐거운 마음으로 일하며\n사용자에게도 즐거운 경험을 선사합니다.",
                    gradient: "from-orange-500 to-yellow-500"
                  },
                  {
                    icon: <Target className="w-6 h-6 text-blue-600" />,
                    title: "8 (숫자)",
                    meaning: "MEANING 04",
                    description: "서양의 무한과 동양의 부와 행운을 상징하는\n숫자 8을 통해 무한한 가능성을 표현합니다.",
                    gradient: "from-green-500 to-emerald-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    onHoverStart={() => setHoveredCard(index + 2)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute -inset-4 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(to right, ${hoveredCard === index + 2 ? 'var(--tw-gradient-from), var(--tw-gradient-to)' : 'transparent, transparent'})`,
                      }}
                    />
                    <motion.div 
                      className="p-8 bg-white rounded-2xl space-y-6 shadow-lg relative border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center relative">
                        {item.icon}
                        <motion.div
                          className="absolute inset-0 bg-blue-200 rounded-xl"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.2, opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="text-blue-600 font-semibold">{item.meaning}</span>
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 핵심 가치 섹션 - 더욱 역동적인 디자인 */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
          {/* 움직이는 패턴 배경 */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto space-y-16"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            <div className="text-center relative">
              <motion.div
                className="absolute -inset-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <span className="text-blue-400 font-semibold">CORE VALUES</span>
              <h2 className="text-4xl font-bold mt-2 relative">우리의 핵심 가치</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "사용자 중심",
                  description: "모든 의사결정의 중심에는 사용자가 있습니다",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "혁신 추구",
                  description: "끊임없는 도전으로 새로운 가치를 창출합니다",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "목표 지향",
                  description: "명확한 목표 설정과 달성을 통해 성장합니다",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition duration-500"
                       style={{
                         background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                         '--tw-gradient-from': 'rgb(59, 130, 246)',
                         '--tw-gradient-to': 'rgb(147, 51, 234)'
                       }}
                  />
                  <div className="p-8 rounded-xl bg-gray-800 relative group-hover:bg-gray-700/50 transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform">
                      {value.icon}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{value.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 비전과 미션 섹션 - 개선된 디자인 */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* 배경 디자인 요소 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.1) 1px, transparent 0)', 
            backgroundSize: '48px 48px' 
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-6xl mx-auto space-y-32"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            {/* 미션 */}
            <div className="space-y-16">
              <div className="text-center relative">
                <motion.div
                  className="absolute -inset-32 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <span className="text-blue-600 font-semibold inline-block px-4 py-1 bg-blue-50 rounded-full mb-4">MISSION</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">우리의 미션</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Star className="w-6 h-6" />,
                    title: "정보의 잠재력 발현",
                    description: "개인마다 가지고 있는 정보의 잠재적 가치를 발굴합니다",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    title: "빠르고 정확한 서비스",
                    description: "사용자가 필요로 하는 순간 바로 활용할 수 있는 서비스를 제공합니다",
                    gradient: "from-purple-500 to-blue-500"
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "지속적인 성장",
                    description: "끊임없는 연구와 혁신을 통해 더 나은 서비스를 만들어갑니다",
                    gradient: "from-blue-500 to-indigo-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition duration-500"
                         style={{
                           background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                           '--tw-gradient-from': '#3B82F6',
                           '--tw-gradient-to': '#1D4ED8'
                         }}
                    />
                    <div className="p-8 bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                        <div className="text-white">
                          {item.icon}
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 섹션 - 더욱 인터랙티브한 디자인 */}
      <section className="py-32 relative overflow-hidden group">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* 인터랙티브 배경 패턴 */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              함께 성장할 준비가 되셨나요?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Amuse8과 함께 미래를 만들어갈 열정 있는 분들을 기다립니다
            </motion.p>
            <motion.div 
              className="pt-8 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="group px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all font-semibold flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">채용 공고 보기</span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.button>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;