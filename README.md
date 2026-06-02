# A002 · 코드넥스트 (CodeNext) — AI·코딩 교육 랜딩 페이지

초등 3학년부터 고등학생까지를 위한 AI·코딩 교육 아카데미 **코드넥스트**의 원페이지
마케팅 사이트입니다. Vite + React 18 + TypeScript, 디자인 방향은 **Swiss / 에디토리얼**.

## 실행

```bash
npm install
npm run dev        # http://localhost:5181
npm run build      # tsc -b + vite build → dist/
npm run preview    # 프로덕션 빌드 미리보기
```

## 구조

```
src/
├── styles/        tokens.css(디자인 토큰) · global.css(리셋·그리드·리빌)
├── data/          content.ts — 모든 카피·데이터의 단일 출처
├── hooks/         useScrollReveal · useCountUp (IntersectionObserver 기반)
├── components/
│   ├── ui/        Button · Reveal
│   ├── layout/    Header(스티키 내비·모바일 메뉴) · Footer
│   └── sections/  Hero · Stats · ValueProps · Tracks · HowItWorks ·
│                  Projects · Testimonials · Pricing · Faq · FinalCta
└── App.tsx
```

섹션 추가/수정은 `src/components/sections/`에, 카피·수치 변경은 `src/data/content.ts`에서.

## 디자인 시스템

- **색**: 표면(off-white) + 잉크 스케일 + 코발트 액센트 + 오렌지 시그널. 모두 OKLCH.
- **타이포**: Pretendard(본문) + Space Grotesk(디스플레이/숫자).
- **모션**: compositor-friendly(`transform`/`opacity`)만 사용, `prefers-reduced-motion` 대응.
- **명암 리듬**: 라이트 → 다크(stats) → 라이트 → sunken(tracks) 교차로 섹션 위계 형성.

## 접근성 (WCAG 2.2 AA)

- 시맨틱 HTML + 스킵 링크 + 랜드마크
- Tracks 탭: WAI-ARIA Tabs 패턴(roving tabindex + 화살표/Home/End 키보드 내비)
- FAQ: button + `aria-expanded`/`aria-controls` 아코디언
- 모바일 메뉴: Esc 닫기 · 포커스 이동/복원 · 데스크톱 리사이즈 시 자동 닫힘
- 대비비: 본문/액센트 텍스트 모두 4.5:1 이상 검증

## 성능

- 프로덕션 번들 ≈ JS 55KB gzip · CSS 6KB gzip (랜딩 예산 150/30KB 이내)
- 폰트 preconnect, reduced-motion 폴백, 스크롤 핸들러 대신 IntersectionObserver

## ⚠️ 데이터 디스클레이머

`src/data/content.ts`의 다음 항목은 **모두 예시(플레이스홀더)** 이며 실제 운영
데이터로 교체해야 합니다:

- **통계**(`stats`): 수강생 수·만족도·작품 수 등
- **강사**(`instructors`): 이름·약력
- **후기**(`testimonials`): 학부모·학생 인용
- **요금**(`plans`): 금액·구성
- **정원·수업 형태**(`tracks[].format`)

표기상의 만족도·수상·재등록률 등은 검증되지 않은 수치이므로, 실제 광고/모객에
사용하기 전 반드시 사실 확인 및 관련 법령(표시광고·학원법 등) 검토가 필요합니다.

## 테스트

`scripts/shot.mjs` — Playwright로 375/768/1440 브레이크포인트 스크린샷 +
콘솔 에러 검사. `URL=... node scripts/shot.mjs` 로 실행, 결과는 `scripts/shots/`.
