/**
 * 랜딩 페이지 콘텐츠 (코드라온 — 가공의 데모 브랜드).
 * NOTE: 통계·강사·후기·요금·정원 등은 [가상/예시] 플레이스홀더입니다.
 * 운영 데이터로 교체하세요. (자세한 목록은 README의 disclaimer 참고)
 */

export const brand = {
  name: '코드라온',
  nameEn: 'Coderaon',
  tagline: '코딩으로 생각하고, AI로 만들어요.',
} as const;

export const nav = [
  { id: 'why', label: '왜 AI 교육' },
  { id: 'tracks', label: '커리큘럼' },
  { id: 'how', label: '학습 방식' },
  { id: 'projects', label: '학생 작품' },
  { id: 'pricing', label: '요금제' },
  { id: 'faq', label: 'FAQ' },
] as const;

export const hero = {
  kicker: 'AI · CODING ACADEMY',
  headline: ['코딩을 배우는 게 아니라,', 'AI 시대를 만드는 법'],
  underline: 'AI 시대를 만드는 법',
  sub: '초등 3학년부터 고등학생까지, 블록코딩부터 생성형 AI 프로젝트까지 단계별로 성장합니다. 만들고, 실패하고, 다시 만들면서 스스로 생각하는 힘을 키워요.',
  ctaPrimary: '무료 진단 수업 신청하기',
  ctaSecondary: '커리큘럼 둘러보기',
} as const;

export interface Stat { value: number; suffix: string; label: string; }
export const stats: Stat[] = [
  { value: 2400, suffix: '+', label: '누적 수강생 수' },
  { value: 96, suffix: '%', label: '학부모 재등록 만족도' },
  { value: 12, suffix: '종', label: '연령별 맞춤 트랙' },
  { value: 38, suffix: '', label: '학생 출품·수상 작품' },
];

export interface ValueProp { title: string; body: string; tag: string; }
export const valueProps: ValueProp[] = [
  {
    tag: '컴퓨팅 사고력',
    title: "코딩은 새로운 '생각의 언어'입니다",
    body: '복잡한 문제를 작게 나누고 순서대로 해결하는 컴퓨팅 사고력은 수학·과학·글쓰기로도 이어집니다. 코드 한 줄보다 "왜 이렇게 풀까?"를 먼저 고민하게 합니다.',
  },
  {
    tag: 'AI 리터러시',
    title: "AI를 '쓰는 사람'과 '만드는 사람'은 다릅니다",
    body: '앞으로 AI는 모든 직업의 기본 도구가 됩니다. 원리를 이해한 아이는 AI를 똑똑하게 활용하고, 그 한계와 위험까지 분별할 수 있습니다.',
  },
  {
    tag: '창의력·표현력',
    title: '정답이 하나가 아닌 경험',
    body: '같은 과제도 아이마다 다르게 풀립니다. 게임·챗봇·작품을 직접 만들며 "내 아이디어가 작동하는" 성취감으로 창의력과 자신감을 함께 키웁니다.',
  },
  {
    tag: '문제해결력',
    title: '실패해도 괜찮은 안전한 도전',
    body: '프로그램은 고치고 다시 실행하면 됩니다. 작은 실패를 반복하며 끝까지 해내는 끈기와 문제해결력을 자연스럽게 배웁니다.',
  },
];

export interface Track {
  code: string;
  grade: string;
  title: string;
  intro: string;
  goals: string[];
  tools: string[];
  outcome: string;
  format: string;
}
export const tracks: Track[] = [
  {
    code: 'EL-01',
    grade: '초등 3~4학년',
    title: '코딩 첫걸음',
    intro: '마우스로 블록을 끼우며 "코딩이 이렇게 재밌구나"를 처음 경험하는 단계.',
    goals: [
      '순서·반복·조건 등 코딩 기본 개념을 놀이로 이해',
      '내 캐릭터가 움직이는 게임·애니메이션 제작',
      'AI가 그림·소리를 인식하는 원리 체험',
      '작품을 발표하며 표현력 키우기',
    ],
    tools: ['Scratch', '엔트리', 'Teachable Machine'],
    outcome: '나만의 미로 탈출 게임 · 표정 따라 반응하는 AI 친구',
    format: '주 1회 · 80분 · 4~6명 소규모',
  },
  {
    code: 'EL-02',
    grade: '초등 5~6학년',
    title: '진짜 코딩 입문',
    intro: '블록을 넘어 진짜 텍스트 코드(파이썬)로 한 단계 점프하는 단계.',
    goals: [
      '변수·함수·반복문 등 파이썬 기본 문법',
      '계산기·퀴즈·텍스트 게임 직접 제작',
      '이미지 인식 AI로 "데이터로 학습한다" 이해',
      '코드를 읽고 버그를 스스로 찾아 고치기',
    ],
    tools: ['Python', 'Teachable Machine', 'mBlock'],
    outcome: '가위바위보 AI · 동·식물 사진 분류기',
    format: '주 1회 · 90분 · 4~6명 소규모',
  },
  {
    code: 'MS-01',
    grade: '중학생',
    title: '데이터와 머신러닝',
    intro: "AI가 어떻게 '학습'하는지, 데이터의 눈으로 들여다보는 단계.",
    goals: [
      '파이썬으로 데이터를 모으고 표·그래프로 정리',
      '머신러닝 기본 원리(학습·예측·평가) 이해',
      '센서·하드웨어로 현실 데이터 다루기',
      '팀 프로젝트로 협업·발표 경험',
    ],
    tools: ['Python', 'micro:bit', 'Teachable Machine'],
    outcome: '센서 자율주행 미니카 · 우리 반 데이터 대시보드',
    format: '주 1~2회 · 90분 · 6~8명 / 프로젝트형',
  },
  {
    code: 'HS-01',
    grade: '고등학생',
    title: '생성형 AI 프로젝트',
    intro: '생성형 AI를 도구로 실제 작동하는 작품을 만들고 포트폴리오로 완성하는 단계.',
    goals: [
      '생성형 AI 원리와 책임 있는 활용법 이해',
      'API·모델로 나만의 앱·서비스 프로토타입 제작',
      '기획→개발→발표까지 전 과정 경험',
      '결과물을 포트폴리오·발표 자료로 정리',
    ],
    tools: ['Python', 'Hugging Face', '생성형 AI API'],
    outcome: '나만의 학습 도우미 챗봇 · AI 진로 탐색 웹앱',
    format: '주 1~2회 · 100분 · 4~6명 / 개별 멘토링',
  },
];

export interface Step { no: string; title: string; body: string; }
export const steps: Step[] = [
  { no: '01', title: '무료 진단 수업', body: '아이의 수준과 관심사를 1:1로 살펴보고 가장 잘 맞는 트랙을 추천합니다.' },
  { no: '02', title: '단계별 맞춤 커리큘럼', body: '검증된 단계별 과정을 아이의 속도에 맞춰 한 걸음씩 쌓아갑니다.' },
  { no: '03', title: '직접 만드는 프로젝트', body: '배운 내용을 모아 매 과정 끝에 "내 작품"을 완성하고 발표합니다.' },
  { no: '04', title: '성장 리포트', body: '출석·이해도·결과물을 정리한 리포트로 성장을 함께 확인합니다.' },
];

export interface Project { idx: string; title: string; desc: string; grade: string; tool: string; }
export const projects: Project[] = [
  { idx: 'P.01', title: '가위바위보 AI', desc: '카메라로 손 모양을 인식해 사람과 대결하는 게임.', grade: '초5~6', tool: 'Teachable Machine + Python' },
  { idx: 'P.02', title: '나만의 챗봇', desc: '내가 정한 성격과 말투로 대답하는 대화형 챗봇.', grade: '고등', tool: '생성형 AI API' },
  { idx: 'P.03', title: '센서 자율주행 미니카', desc: '장애물을 피해 스스로 길을 찾는 작은 자동차.', grade: '중등', tool: 'micro:bit' },
  { idx: 'P.04', title: '미로 탈출 게임', desc: '직접 디자인한 캐릭터로 플레이하는 블록코딩 게임.', grade: '초3~4', tool: 'Scratch' },
  { idx: 'P.05', title: '동·식물 사진 분류기', desc: '사진을 찍으면 무엇인지 알려주는 이미지 인식 앱.', grade: '초5~6', tool: 'Teachable Machine' },
  { idx: 'P.06', title: '우리 반 데이터 대시보드', desc: '설문 데이터를 그래프로 한눈에 보여주는 분석 작품.', grade: '중등', tool: 'Python' },
];

export interface Instructor { name: string; credential: string; track: string; }
export const instructors: Instructor[] = [
  { name: '김도현', credential: '컴퓨터교육 전공 · 초·중등 코딩 교육 8년', track: '초등 트랙(EL) 담당 · 스스로 답을 찾도록 기다려주는 수업' },
  { name: '이서연', credential: '데이터사이언스 석사 · ML 교육 콘텐츠 개발', track: '중등 데이터·머신러닝(MS) 담당 · 개념을 일상 사례로 풀이' },
  { name: '박지훈', credential: '소프트웨어공학 전공 · 스타트업 개발·멘토링', track: '고등 생성형 AI(HS) 담당 · 진학·진로 연계 실전 프로젝트' },
];

export interface Testimonial { quote: string; author: string; feature?: boolean; }
export const testimonials: Testimonial[] = [
  {
    quote: '게임만 하던 아이가 이제 직접 게임을 만들겠다고 해요. 어려울 줄 알았는데, 매주 "오늘 이거 만들었어!" 하고 자랑하는 모습이 제일 좋습니다.',
    author: '초5 학부모',
    feature: true,
  },
  {
    quote: '비전공 부모라 막막했는데, 진단 수업부터 성장 리포트까지 챙겨주셔서 믿고 맡기고 있어요. AI를 무작정 쓰는 게 아니라 원리를 배운다는 점이 좋습니다.',
    author: '중2 학부모',
  },
  {
    quote: '처음엔 파이썬이 외계어 같았는데, 제가 만든 챗봇이 진짜로 대답했을 때 신기했어요. 다음엔 친구들이랑 쓸 앱을 만들어보고 싶어요!',
    author: '고1 수강생',
  },
];

export interface Plan {
  name: string;
  price: string;
  period: string;
  target: string;
  features: string[];
  recommended?: boolean;
}
export const plans: Plan[] = [
  {
    name: '체험',
    price: '무료',
    period: '1회',
    target: '처음 시작하는 누구나',
    features: ['1:1 진단 수업 1회', '수준·트랙 상담', '맞춤 커리큘럼 추천'],
  },
  {
    name: '정규',
    price: '189,000',
    period: '원 / 월',
    target: '단계별 성장 학습자',
    features: ['주 1회 정규 수업(4회/월)', '소규모 대면(온라인 병행)', '교재·실습 환경 제공', '월간 성장 리포트'],
    recommended: true,
  },
  {
    name: '심화',
    price: '269,000',
    period: '원 / 월',
    target: '프로젝트·포트폴리오 집중',
    features: ['주 1~2회 수업(6~8회/월)', '프로젝트 개별 멘토링', '포트폴리오 제작 지원', '대회·전시 출품 코칭'],
  },
];

export interface Faq { q: string; a: string; }
export const faqs: Faq[] = [
  { q: '아이가 코딩을 한 번도 안 해봤어도 괜찮나요?', a: '네, 전혀 문제없습니다. 대부분의 학생이 처음 시작합니다. 무료 진단 수업에서 수준을 확인한 뒤 가장 쉬운 단계부터 시작하니 부담 없이 따라올 수 있습니다.' },
  { q: '부모가 코딩을 몰라도 도와줄 수 있나요?', a: '부모님의 코딩 지식은 필요하지 않습니다. 수업·과제·복습 모두 아이가 스스로 할 수 있도록 설계했고, 진행 상황은 성장 리포트로 알기 쉽게 안내합니다.' },
  { q: '집에 어떤 장비가 필요한가요?', a: '인터넷이 되는 노트북이나 데스크톱 1대면 충분합니다. micro:bit 같은 하드웨어가 필요한 수업은 교구를 제공·대여하며, 준비물은 미리 안내합니다.' },
  { q: '대면 수업인가요, 온라인인가요?', a: '대면 수업을 기본으로 하되 온라인도 병행합니다. 가정 상황에 맞게 선택할 수 있으며, 온라인도 소규모로 진행해 한 명 한 명 봐드립니다.' },
  { q: '아이들이 AI를 쓰면 위험하지 않나요?', a: '연령에 맞는 안전한 도구만 사용하고, 생성형 AI는 교사 지도 아래 책임 있게 활용하는 법을 함께 가르칩니다. 온라인 수업은 보호된 환경에서 진행되며 개인정보 보호 수칙도 안내합니다.' },
  { q: '정말 실력이 늘긴 하나요?', a: '"누구나 천재가 된다"는 식의 약속은 하지 않습니다. 다만 단계별 커리큘럼과 프로젝트로 컴퓨팅 사고력과 자기주도성이 자라는 과정을 매월 결과물과 리포트로 직접 확인하실 수 있습니다.' },
  { q: '결석하면 보강이 가능한가요?', a: '사전에 알려주시면 보강 수업 또는 수업 자료로 보완해 드립니다. 자세한 보강·환불 규정은 등록 시 서면으로 안내하며 관련 법령을 따릅니다.' },
  { q: '학년·수준이 트랙과 안 맞으면요?', a: '학년은 기준일 뿐, 진단 결과에 따라 더 맞는 트랙으로 조정합니다. 빠르게 성장하면 다음 트랙으로 올라가고, 더 다지고 싶다면 충분히 머무를 수 있습니다.' },
];

export const finalCta = {
  headline: "우리 아이의 첫 'AI 만들기', 오늘 시작해요.",
  sub: '무료 진단 수업에서 아이의 수준과 관심사를 확인하고, 가장 잘 맞는 출발점을 찾아드립니다. 부담 없이 신청하세요.',
  button: '무료 진단 수업 신청하기',
} as const;
