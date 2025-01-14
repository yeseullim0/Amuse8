# CEEP 랜딩 페이지

CEEP의 서비스 및 회사 소개를 위한 랜딩 페이지입니다.

## 기술 스택

- **React**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **Vite**: 빠른 개발 환경을 제공하는 빌드 도구
- **Tailwind CSS**: 유틸리티 기반의 CSS 프레임워크
- **Framer Motion**: 애니메이션을 쉽게 구현할 수 있는 라이브러리
- **React Router DOM**: SPA(Single Page Application)에서 페이지 라우팅을 위한 라이브러리

## 종속성 설치
```bash
npm install
```

## 개발 서버 실행
### 1. 개발 서버 시작
```bash
npm run dev
```

### 2. 브라우저에서 확인
- http://localhost:5173 접속
- 다른 디바이스에서 접속하려면:
```bash
npm run dev -- --host
```

## 프로젝트 구조
src/
├── assets/          # 이미지, 비디오 등 정적 파일
│   ├── images/
│   └── videos/
├── components/      # 리액트 컴포넌트
│   ├── common/      # 공통 컴포넌트 (Header, Footer, Layout)
│   └── home/        # 홈페이지 관련 컴포넌트
│   │  └── sections/
|   └── legal       # 서비스 이용약관, 개인정보처리방침
├── pages/          # 페이지 컴포넌트
└── styles/         # 전역 스타일