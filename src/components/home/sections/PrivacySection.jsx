import { motion } from 'framer-motion';
import { Shield } from 'lucide-react'; // 보안/프라이버시를 상징하는 아이콘

const PrivacySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            자사는 사용자의 데이터 소유권을 <span className="font-bold">절대</span> 주장하지 않습니다.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
            <span className="font-bold">Ceep</span>은 사용자의 데이터를 AI가 기능개선을 위한 용도로 활용하며,<br />
            다른 목적으로 이를 활용하지 않습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;