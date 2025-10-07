# MTHT 프로젝트 명세서

## 프로젝트 개요

**프로젝트명**: MTHT (메타힌트)  
**버전**: 1.0.0  
**플랫폼**: React Native + Expo  
**개발 환경**: TypeScript  

MTHT는 AI 건강비서 앱으로, 사용자의 건강 상태를 진단하고 맞춤형 건강 관리 솔루션을 제공하는 모바일 애플리케이션입니다.

## 기술 스택

### 프레임워크 및 라이브러리
- **React Native**: 0.81.4
- **Expo**: ~54.0.12
- **Expo Router**: ~6.0.10 (파일 기반 라우팅)
- **TypeScript**: ~5.9.2

### 주요 의존성
- **@expo/vector-icons**: 아이콘 컴포넌트
- **expo-image**: 이미지 최적화
- **expo-linear-gradient**: 그라데이션 배경
- **expo-splash-screen**: 스플래시 화면
- **react-native-gesture-handler**: 제스처 처리
- **react-native-reanimated**: 애니메이션

## 프로젝트 구조

```
mtht/
├── app/                          # 앱 페이지 (Expo Router)
│   ├── _layout.tsx              # 루트 레이아웃
│   ├── (tabs)/                  # 탭 네비게이션
│   │   ├── _layout.tsx
│   │   ├── index.tsx            # 메인 페이지
│   │   └── explore.tsx
│   ├── askings-1.tsx ~ askings-35.tsx  # 설문 페이지들
│   ├── self-diagnosis-add.tsx   # 자가진단 추가
│   ├── self-diagnosis-complete.tsx  # 자가진단 완료
│   ├── self-diagnosis-detail.tsx     # 자가진단 상세결과
│   ├── survey-result.tsx        # 설문 결과
│   └── modal.tsx               # 모달 페이지
├── components/                  # 재사용 컴포넌트
│   ├── splash-screen.tsx       # 스플래시 화면
│   └── ui/                     # UI 컴포넌트들
├── assets/                     # 정적 자원
│   └── images/                 # 이미지 파일들
├── constants/                  # 상수 정의
├── hooks/                      # 커스텀 훅
└── scripts/                    # 빌드 스크립트
```

## 주요 기능

### 1. 스플래시 화면
- **파일**: `components/splash-screen.tsx`
- **기능**: 앱 시작 시 로고 애니메이션 표시
- **지속시간**: 2.5초
- **애니메이션**: 페이드인 + 스케일 효과

### 2. 메인 페이지
- **파일**: `app/(tabs)/index.tsx`
- **구성요소**:
  - 상단 헤더 (프로필, 알림)
  - 그라데이션 배경 (보라색 계열)
  - AI 로봇 이미지
  - 자가진단 배너
  - 검색 바 (텍스트 입력 + 마이크)
  - 일일 콘텐츠 카드
  - 건강 레벨 표시
  - 건강정보 추가 섹션
  - 하단 네비게이션 바
  - 플로팅 액션 버튼 (Q)

### 3. 자가진단 시스템
- **자가진단 추가**: `app/self-diagnosis-add.tsx`
  - 6개 진단 카테고리 선택
  - 기초건강, 만성질환, 식/생활습관, 자각증상, 피부건강, 두피건강

- **설문 시스템**: `app/askings-1.tsx` ~ `app/askings-35.tsx`
  - 총 35개 질문
  - 피부건강 관련 상세 진단
  - 4개 선택지 (매우 그렇다, 그렇다, 보통이다, 아니다)
  - 페이지 인디케이터 (현재페이지/35)
  - 이전/다음 네비게이션

- **설문 결과**: `app/survey-result.tsx`
  - 완료 메시지 표시
  - 저장하기 버튼

- **자가진단 완료**: `app/self-diagnosis-complete.tsx`
  - 진단 결과 요약
  - 추가/수정 버튼
  - 상세결과 보기

- **상세결과**: `app/self-diagnosis-detail.tsx`
  - 14개 피부건강 지표 분석
  - 진행률 바
  - 상태 표시 (주의/양호)

## 라우팅 구조

### Stack Navigation
- `(tabs)`: 메인 탭 네비게이션
- `self-diagnosis-add`: 자가진단 추가
- `askings-1` ~ `askings-35`: 설문 페이지들
- `survey-result`: 설문 결과
- `self-diagnosis-complete`: 자가진단 완료
- `self-diagnosis-detail`: 상세결과
- `modal`: 모달 페이지

### 네비게이션 플로우
1. 스플래시 → 메인 페이지
2. 메인 페이지 → 자가진단 추가
3. 자가진단 추가 → 설문 시작 (askings-1)
4. 설문 진행 (askings-1 → askings-35)
5. 설문 완료 → 설문 결과
6. 설문 결과 → 자가진단 완료
7. 자가진단 완료 → 상세결과

## UI/UX 디자인

### 색상 팔레트
- **주 색상**: 보라색 (#8B5CF6)
- **보조 색상**: 연한 보라색 (#A78BFA, #C4B5FD)
- **배경색**: 흰색 (#FFFFFF)
- **텍스트**: 진한 회색 (#374151, #1F2937)
- **보조 텍스트**: 회색 (#6B7280, #9CA3AF)

### 타이포그래피
- **제목**: 18-32px, 굵은 글씨
- **본문**: 14-16px, 일반 글씨
- **라벨**: 12-14px, 중간 굵기

### 컴포넌트 스타일
- **카드**: 둥근 모서리 (12-16px), 그림자 효과
- **버튼**: 둥근 모서리 (8-25px), 그라데이션 또는 단색
- **입력 필드**: 둥근 모서리 (25px), 그림자 효과

## 상태 관리

### 로컬 상태
- `useState` 훅을 사용한 컴포넌트별 상태 관리
- 설문 답변 선택 상태
- 탭 활성화 상태
- 로딩 상태

### 데이터 흐름
- 설문 답변: 각 페이지에서 로컬 상태로 관리
- 결과 데이터: 콘솔 로그로 임시 저장 (향후 서버 연동 예정)

## 이미지 및 자원

### 이미지 파일
- `mthtflash.png`: 스플래시 로고
- `main-robots.png`: 메인 페이지 AI 로봇
- `icon.png`: 앱 아이콘
- `android-icon-*.png`: 안드로이드 아이콘 세트

### 아이콘
- `@expo/vector-icons`의 Ionicons 사용
- 주요 아이콘: home, person-circle, notifications, analytics, medical, document-text

## 개발 환경 설정

### 필수 요구사항
- Node.js (최신 LTS 버전)
- Expo CLI
- React Native 개발 환경

### 설치 및 실행
```bash
npm install
npm start
```

### 빌드 명령어
- `npm run android`: 안드로이드 빌드
- `npm run ios`: iOS 빌드
- `npm run web`: 웹 빌드
- `npm run lint`: 코드 린팅

## 향후 개발 계획

### 단기 계획
- 다른 탭 페이지 구현 (힌트몰, Ai, 습관, 더보기)
- 실제 이미지 적용
- 설문 데이터 저장 로직 구현

### 중기 계획
- 서버 API 연동
- 사용자 인증 시스템
- 데이터베이스 연동
- 푸시 알림

### 장기 계획
- AI 분석 엔진 연동
- 개인화된 건강 추천 시스템
- 소셜 기능 추가
- 다국어 지원

## 기술적 특징

### 성능 최적화
- Expo Image 사용으로 이미지 최적화
- React Native Reanimated로 부드러운 애니메이션
- 컴포넌트 메모이제이션 적용

### 반응형 디자인
- 화면 크기별 적응형 레이아웃
- 안전 영역 고려한 패딩 설정
- 다양한 디바이스 지원

### 접근성
- 의미있는 텍스트 라벨
- 적절한 색상 대비
- 터치 영역 최적화

## 라이선스 및 저작권

이 프로젝트는 비공개 프로젝트입니다. 모든 코드와 디자인은 저작권이 보호됩니다.

## 연락처

프로젝트 관련 문의사항이 있으시면 개발팀에 연락해주세요.
