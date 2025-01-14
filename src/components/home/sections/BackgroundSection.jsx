import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
 Search, 
 Folder, 
 File, 
 Instagram, 
 Facebook, 
 Youtube,
 Link2,
 FileText,
 BookOpen
} from 'lucide-react';
import PropTypes from 'prop-types';

const FloatingIcon = ({ children, posX, posY }) => {
 const randomDuration = 5 + Math.random() * 3;

 return (
   <motion.div
     initial={{ x: posX, y: posY }}
     animate={{ 
       y: [posY, posY - 30, posY],
       x: [posX, posX + 10, posX],
       rotate: [0, 5, -5, 0]
     }}
     transition={{ 
       duration: randomDuration,
       repeat: Infinity,
       ease: "easeInOut"
     }}
     className="absolute text-blue-300/60"
     style={{ 
       left: posX,
       top: posY
     }}
   >
     {children}
   </motion.div>
 );
};

FloatingIcon.propTypes = {
 children: PropTypes.node.isRequired,
 posX: PropTypes.string.isRequired,
 posY: PropTypes.string.isRequired
};

const BackgroundSection = () => {
 const [firstRef, firstInView] = useInView({
   triggerOnce: true,
   threshold: 0.2,
 });

 const [secondRef, secondInView] = useInView({
   triggerOnce: true,
   threshold: 0.2,
 });


 const stats = [
   { number: '82%', text: '의 직장인이 정보 과잉을 경험' },
   { number: '4.5시간', text: '하루 평균 정보 수집 시간' },
   { number: '63%', text: '가 수집한 정보를 잊어버림' },
 ];

 const floatingIcons = [
   // 왼쪽 위 그룹
   { Icon: Instagram, x: '15%', y: '20%', size: 26 },
   { Icon: Search, x: '25%', y: '35%', size: 24 },
   
   // 오른쪽 위 그룹
   { Icon: Facebook, x: '75%', y: '25%', size: 28 },
   { Icon: BookOpen, x: '85%', y: '35%', size: 30 },
   
   // 중앙 좌우 그룹
   { Icon: File, x: '30%', y: '50%', size: 24 },
   { Icon: Folder, x: '70%', y: '45%', size: 28 },
   
   // 왼쪽 아래 그룹
   { Icon: FileText, x: '20%', y: '65%', size: 26 },
   { Icon: Youtube, x: '35%', y: '75%', size: 28 },
   
   // 오른쪽 아래 그룹
   { Icon: Link2, x: '65%', y: '70%', size: 24 },
   { Icon: BookOpen, x: '80%', y: '65%', size: 30 }
 ];

 return (
   <section className="bg-gradient-to-b from-gray-50 to-white -mt-16">
     {/* 첫 번째 섹션: 정보 과잉 문제 */}
     <div className="h-screen flex items-center relative overflow-hidden">
       {/* 떠다니는 아이콘들 */}
       {floatingIcons.map((item, index) => (
         <FloatingIcon
           key={index}
           posX={item.x}
           posY={item.y}
         >
           <item.Icon size={item.size} />
         </FloatingIcon>
       ))}

       <div className="container mx-auto px-4">
         <motion.div
           ref={firstRef}
           className="max-w-4xl mx-auto text-center space-y-16"
         >
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={firstInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
               정보 과잉 시대,<br />
               당신의 디지털 기억력은 안녕하신가요?
             </h2>
             <p className="text-xl text-gray-600">
               매일 쏟아지는 정보들 속에서 우리는 점점 더 많은 것을 놓치고 있습니다.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0 }}
             animate={firstInView ? { opacity: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
           >
             {stats.map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={firstInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                 className="p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg"
               >
                 <div className="text-3xl font-bold text-blue-500">{stat.number}</div>
                 <div className="text-gray-600 mt-2">{stat.text}</div>
               </motion.div>
             ))}
           </motion.div>
         </motion.div>
       </div>
     </div>

     {/* 통합된 두 번째 섹션: 기업 실태 및 손실 */}
     <div className="h-screen flex items-center">
       <div className="container mx-auto px-4">
         <motion.div
           ref={secondRef}
           className="max-w-4xl mx-auto space-y-16"
         >
           {/* 기업 실태 */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={secondInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
             <div className="bg-blue-50 p-8 rounded-2xl text-center mb-16">
               <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                 이러한 문제는 기업에서 더욱 심각합니다
               </h3>
               <div className="text-xl text-gray-800 space-y-4">
                 <p>직장인 <span className="text-red-500 font-bold">72.6%</span>가 업무 자료 관리에 어려움을 겪고 있으며</p>
                 <p>관리되지 않는 수많은 자료로 인해 <span className="text-red-500 font-bold">35.8%</span>의 업무 효율이 저하되고 있습니다</p>
               </div>
             </div>
           </motion.div>

           {/* 손실 카드 섹션 */}
           <motion.h3 
                className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={secondInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                비효율적인 자료 관리가 가져오는 손실
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                image: "/src/assets/images/Temporal.jpg",
                title: "시간적 손실",
                description: "주 평균 ",
                emphasis: "18시간 이상",
                suffix: " 낭비",
                alt: "시간적 손실을 나타내는 이미지",
                sourceLink: "https://kr.freepik.com/free-photo/top-view-wall-clocks-still-life_42952297.htm#fromView=search&page=5&position=3&uuid=ae4e38a0-77c2-4b2d-86b6-80adde2083bb&new_detail=true"
                },
                {
                image: "/src/assets/images/Productivity.jpg",
                title: "생산성 손실",
                description: "업무 생산성 ",
                emphasis: "20%",
                suffix: " 감소",
                alt: "생산성 손실을 나타내는 이미지",
                sourceLink: "https://kr.freepik.com/free-photo/office-scene-top-view_1128145.htm#from_view=detail_alsolike"
                },
                {
                image: "/src/assets/images/cost.jpg",
                title: "비용적 손실",
                description: "연간 약 ",
                emphasis: "3천만원",
                suffix: " 낭비",
                alt: "비용적 손실을 나타내는 이미지",
                sourceLink: "https://kr.freepik.com/free-photo/pile-coins-forming-graph_11433289.htm#fromView=search&page=1&position=21&uuid=016ba2ae-d84c-4243-a343-5a72e449ab0c&new_detail=true"
                }
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={secondInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                {/* 이미지 */}
                <div className="relative h-64 overflow-hidden">
                    <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* 오버레이 */}
                    <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-200" />
                    {/* 출처 링크 */}
                    <a 
                        href={item.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 text-xs text-gray-500/70 transition-colors duration-200 z-10"
                    >
                        출처 freepik
                    </a>
                </div>

                {/* 텍스트 오버레이 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                    <span className="text-red-300 font-bold">{item.emphasis}</span>
                    {item.suffix}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>
         </motion.div>
       </div>
     </div>
   </section>
 );
};

export default BackgroundSection;