import { motion } from 'framer-motion';
import { Building2, User } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="min-h-screen flex items-center py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            업무 효율을 높이는 똑똑한 솔루션
          </h2>
        </motion.div>

        {/* B2C/B2B 솔루션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <User className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">B2C</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>업무 역량 강화</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>자료 파편화 문제 해결</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>비효율적 자료관리 해결</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">B2B</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>업무 효율화</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>시간과 비용 문제 해결</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>SaaS 다중 결제 문제 해결</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 성과 지표 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              기술력 기반의 확실한 성과
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-gray-600">기존</div>
                <div className="text-3xl font-bold text-gray-900">24시간</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-gray-600">서비스 도입</div>
                <div className="text-3xl font-bold text-blue-600">약 20분</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              인건비 감소 또는 대체
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-gray-600">기존</div>
                <div className="text-3xl font-bold text-gray-900">팀 단위</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-gray-600">서비스 도입</div>
                <div className="text-3xl font-bold text-blue-600">1명</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;