export const Footer = () => {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* 링크 섹션 */}
          <div className="flex gap-4 mb-4">
            <a 
              href="/terms"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900"
            >
              서비스 이용약관
            </a>
            <p className="text-gray-300">|</p>
            <a 
              href="/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              개인정보처리방침
            </a>
          </div>
  
          {/* 구분선 추가 */}
          <hr className="border-gray-300 my-4" />
  
          {/* 회사 정보 섹션 */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>Amuse8 Company | 대표 : 신동민</p>
            <p>사업자등록번호 : 225-10-15800 </p>
            <p> 이메일 : dongmin@amuse8.kr</p>
            <p>주소 : 서울특별시 중구 퇴계로36길 2, 충무로 영상센터 신관 B250호</p>
          </div>
  
          {/* 저작권 */}
          <div className="text-sm text-gray-500 mt-4">
            Copyright © 2024 Amuse8 Inc.All rights reserved
          </div>
        </div>
      </footer>
    );
  };