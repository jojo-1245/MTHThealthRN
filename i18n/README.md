# 다국어 지원 (i18n) 가이드

이 프로젝트는 `i18next`와 `react-i18next`를 사용하여 다국어를 지원합니다.

## 지원 언어

- **한국어** (ko) - 기본 언어
- **영어** (en)
- **일본어** (ja)
- **중국어 간체** (zh)
- **인도네시아어** (id)

## 파일 구조

```
i18n/
├── config.ts          # i18n 설정 파일
├── index.ts           # Export 파일
├── locales/           # 번역 파일들
│   ├── ko.json        # 한국어
│   ├── en.json        # 영어
│   ├── ja.json        # 일본어
│   ├── zh.json        # 중국어 간체
│   └── id.json        # 인도네시아어
└── README.md          # 이 파일
```

## 사용 방법

### 1. 컴포넌트에서 번역 사용하기

```tsx
import { useTranslation } from '@/i18n';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <Text>{t('common.ok')}</Text>
  );
}
```

### 2. 언어 변경하기

```tsx
import { changeLanguage } from '@/i18n';

// 언어 변경
changeLanguage('en'); // 영어로 변경
changeLanguage('ko'); // 한국어로 변경
```

### 3. 현재 언어 가져오기

```tsx
import { i18n } from '@/i18n';

const currentLanguage = i18n.language; // 'ko', 'en', 'ja', 'zh', 'id'
```

### 4. 번역 키 구조

번역 파일은 네임스페이스 구조로 구성됩니다:

```json
{
  "common": {
    "ok": "확인",
    "cancel": "취소"
  },
  "navigation": {
    "home": "홈"
  }
}
```

사용 시:
- `t('common.ok')` → "확인"
- `t('navigation.home')` → "홈"

### 5. 변수 포함 번역

```json
{
  "greeting": "안녕하세요, {{name}}님"
}
```

```tsx
const { t } = useTranslation();
<Text>{t('greeting', { name: '홍길동' })}</Text>
// 결과: "안녕하세요, 홍길동님"
```

## 번역 파일 추가하기

1. `i18n/locales/` 폴더에 새로운 언어 파일 추가 (예: `fr.json`)
2. `i18n/config.ts`에서 언어 리소스 import 및 추가
3. `languages` 객체에 언어 추가
4. `getDeviceLanguage()` 함수에 언어 매핑 추가

## 주의사항

- 모든 언어 파일은 동일한 키 구조를 유지해야 합니다
- 번역이 누락된 경우 기본 언어(한국어)로 fallback됩니다
- 앱은 기기의 언어 설정을 자동으로 감지하여 초기 언어를 설정합니다

