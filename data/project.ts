import { myProjectProps } from '@/type/project';

export const Project1: myProjectProps = {
  projectImg: '/images/projects/project1/ggumtleIcon.png',
  title: '꿈틀',
  subtitle: '투자성향 및 버킷리스트 기반 자산관리 서비스',
  date: '2025.01 ~ 2025.02',
  skills: [
    {
      category: 'skill',
      src: '/images/logos/nextjs.jpeg',
      name: 'Next.js',
    },
    {
      category: 'skill',
      src: '/images/logos/typescript.png',
      name: 'TypeScript',
    },
    {
      category: 'skill',
      src: '/images/logos/tailwindcss.png',
      name: 'Tailwind CSS',
    },
    {
      category: 'skill',
      src: '/images/logos/zustand.svg',
      name: 'Zustand',
    },
    {
      category: 'skill',
      src: '/images/logos/radix-ui.png',
      name: 'Radix-UI',
    },
    {
      category: 'skill',
      src: '/images/logos/storybook.png',
      name: 'Storybook',
    },
  ],
  githubLink: 'https://github.com/digital-hanaro-RSP',
  githubLinkTitle: '꿈틀 Github',
  role: {
    name: '프론트엔드 팀장',
    detail: [
      '프로젝트 초기 기술 스택 선정, 코드 구조 및 아키텍처 설계',
      'Figma를 이용한 프로젝트 디자인',
      '팀원 업무 분배 및 코드 리뷰',
      '성능 최적화 및 유지 보수 고려한 레퍼런스 제시(framer, sweetalert 등)',
      '버킷리스트 관련 컴포넌트 및 페이지 개발',
      '설문조사 관련 컴포넌트 개발',
      '모든 오류에 sweetalert 이용한 예외처리',
      '발표 PPT 제작',
    ],
  },
  service: [
    {
      title: '시니어 타겟 선정 이유',
      content: [
        `거대한 인구 규모(한국 인구의 <strong>30%</strong> 이상)`,
        `강력한 자산 규모(50대 이상 가구주의 순자산 : 전체 가구의 <strong>60%</strong>)`,
        `적극적인 소비 성향 (<strong>액티브 시니어</strong>)`,
      ],
    },
    {
      title: '꿈을 실현하는 금융 서비스',
      content: [
        `하나 금융 연구소의 대한민국 금융소비자 보고서 2025에 따르면, 은퇴 후 주거래 은행 변경 요인으로 자산 유지 및 관리 컨설팅, 시니어 특화 서비스, 노후 생활 연계 제공 등 차별화된 금융 서비스가 중요한 결정 요인으로 꼽혔습니다.`,
        `이에 따라, 버킷 리스트라는 구체적인 목표를 자산 관리와 연계하여, 베이비부머 세대가 자신이 꿈꾸던 삶을 실현할 수 있도록 돕는 플랫폼을 만들었습니다.`,
      ],
    },
  ],
  achievement: [
    {
      title: '적응형 디자인 적용',
      content: [
        '서비스 특성 상 웹, 모바일 환경 어디서든 사용이 가능해야 했습니다.',
        '컴퓨터, 태블릿, 스마트폰 각각의 환경에 맞춘 화면을 설계하였고, 이는 Tailwind CSS를 이용하여 환경의 너비에 따른 화면 구성을 다르게 개발했습니다.',
        `추가적으로 <strong class = 'highlight'>PWA(Progressive Web Apps)</strong>을 도입하여 마치 어플리케이션처럼 등록이 가능하도록 구현했습니다.`,
      ],
    },
    {
      title: '커뮤니티 TBT(Total Blocking Time) 개선',
      content: [
        '커뮤니티 글을 페이지로 나누어 관리할 수 있으나 사용자 경험이 떨어진다 판단하여 한 페이지로 보이도록 설계했습니다.',
        '그러나 전체 데이터를 한번에 불러오는 것은 로딩 속도가 오래 걸린다는 단점이 있었고 실제로 TBT가 1.7s로 사용성이 불편했습니다.',
        `이 문제를 해결하기 위해 웹 브라우저의 네이티브 JavaScript API인 Intersection Observer를 활용하여 <strong class = 'highlight'>useInfiniteScroll</strong> 커스텀 훅을 구현했습니다.`,
        '이 훅은 무한 스크롤 기능을 제공하며, 초기 로딩 시에는 10개의 데이터만 fetching하고, 사용자가 마지막 데이터 요소까지 스크롤하면 추가 데이터를 로드하는 방식으로 구현했습니다.',
        `이를 통해 LightHouse 성능 점수를 <strong class = 'highlight'>47%</strong> 향상시켰고 TBT는 <strong class = 'highlight'>0.3s</strong>로 단축시켰습니다.`,
      ],
    },
    {
      title: 'Storybook을 이용한 TDD 개발',
      content: [
        `<strong class= 'highlight'>51개</strong>의 Atom, Molecule 컴포넌트에 대해 Storybook을 제작하였습니다.`,
        `이를 통해 <strong class= 'highlight'>145개</strong>의 경우의 수를 커버하였고, 팀 단위 개발에서 코드의 재사용성을 높였습니다.`,
      ],
    },
    {
      title: 'Zustand 전역 상태관리 및 불필요한 fetching 감축',
      content: [
        `Zustand를 이용하면 간단하면서도 강력한 전역 상태 관리가 가능합니다. 이를 이용해 불필요한 데이터 fetching 문제를 효과적으로 해결할 수 있었습니다.`,
        `비동기 작업 최적화를 통해 성능 개선뿐만 아니라 사용자 경험 향상에도 기여하고, 서버의 리소스 사용량도 크게 절감할 수 있었습니다.`,
      ],
    },
  ],

  architectureImg: '/images/projects/project1/Architecture.png',
  architectureDetail: '',
  evaluation: '',
  awards: '디지털 하나로 2차 프로젝트 종합 2위',
};

export const Project2: myProjectProps = {
  projectImg: '/images/projects/project2/KeywordHanaroIcon.jpg',
  title: '키워드하나로',
  subtitle: '키워드 기반 쉽고 빠른 금융 서비스 개발',
  date: '2024.10 ~ 2024.12',
  skills: [
    {
      category: 'skill',
      src: '/images/logos/nextjs.jpeg',
      name: 'Next.js',
    },
    {
      category: 'skill',
      src: '/images/logos/typescript.png',
      name: 'TypeScript',
    },
    {
      category: 'skill',
      src: '/images/logos/tailwindcss.png',
      name: 'Tailwind CSS',
    },
    {
      category: 'skill',
      src: '/images/logos/radix-ui.png',
      name: 'Radix-UI',
    },
    {
      category: 'skill',
      src: '/images/logos/storybook.png',
      name: 'Storybook',
    },
    {
      category: 'skill',
      src: '/images/logos/java.svg',
      name: 'JAVA',
    },
    {
      category: 'skill',
      src: '/images/logos/spring.png',
      name: 'Spring',
    },
    {
      category: 'skill',
      src: '/images/logos/fastapi.svg',
      name: 'FastAPI',
    },
    {
      category: 'skill',
      src: '/images/logos/python.webp',
      name: 'Python',
    },
    {
      category: 'skill',
      src: '/images/logos/langchain.png',
      name: 'LangChain',
    },
    {
      category: 'skill',
      src: '/images/logos/openai.webp',
      name: 'OpenAI',
    },
  ],
  githubLink: 'https://github.com/KeywordHanaro',
  githubLinkTitle: '키워드하나로 Github',
  role: {
    name: '프론트엔드 팀장, AI 서비스 개발',
    detail: [
      '프로젝트 초기 기술 스택 선정, 코드 구조 및 아키텍처 설계',
      'Figma를 이용한 프로젝트 디자인',
      '팀원 업무 분배 및 코드 리뷰',
      'Context를 이용한 전역 상태 관리(입력 단계별 변수 관리)',
      'Atom, Molecule, Organism 컴포넌트 개발 및 Storybook 작성',
      'Kakao Developer API 적용한 로그인 및 메시지 서비스 구현',
      'LLM & RAG 결합한 금융상품 기반 답변 챗봇 제작',
      '발표 PPT 제작',
    ],
  },
  service: [
    {
      title: '개발 개요',
      content: [
        `최근 금융서비스의 비대면화가 가속됨에 따라, 모바일 환경에서 직관적이고 신속한 고객 경험이 중요시 됨`,
        `이를 위해, 고객이 자주 사용하는 키워드를 등록 기능을 도입하여 개인화된 금융 서비스 제공`,
      ],
    },
    {
      title: '개발 목적',
      content: [
        `단순 업무를 위한 영업점 방문 횟수의 감소`,
        `모바일 뱅킹 서비스의 접근성 및 편의성 향상`,
        `비대면 금융 서비스 강화`,
        `고객의 키워드 기반 빠른 업무 목록 데이터 수집`,
        `각 금융 상품별 고객의 자주 묻는 질문에 대한 데이터 수집`,
      ],
    },
    {
      title: '기대 효과',
      content: [
        `영업점 직원, 가족의 도움 한번으로 어르신들의 단순업무를 위한 <strong>영업점 방문 횟수 감소</strong>`,
        `단축 키워드 등록으로 더 <strong>빠른 금융 서비스</strong>를 경험`,
        `금융 상품 문의 지원 AI에게 한 질문 데이터를 저장하여 향후 금융 전문 AI 챗봇의 <strong>답변 고도화</strong>에 유리하게 적용`,
        `궁금한 내용을 미리 질문할 수 있어 현장 질문이 감소해 <strong>응대 시간 단축</strong>`,
        `각 금융 상품별 고객의 자주 묻는 질문에 대한 <strong>데이터 수집</strong>`,
      ],
    },
  ],
  achievement: [
    {
      title: 'UX를 고려한 인터랙티브 컴포넌트 개발',
      content: [
        `번호표 발급, 키워드 순서 설정, 등 <strong class= 'highlight'>사용자 행동에 따라 자연스러운 움직임</strong>을 가진 컴포넌트를 개발했습니다.`,
        `Drawer 컴포넌트에서 스크롤 시 높이 비율을 높여 사용자가 편하게 찾을 수 있도록 구현했습니다`,
        `비밀번호 입력 시 숫자의 위치를 <strong class= 'highlight'>랜덤</strong>하게 바꾸도록 설계하여 <strong class= 'highlight'>보안성</strong>을 높였습니다.`,
      ],
    },
    {
      title: 'Kakao Developer API를 활용한 풀스택 개발',
      content: [
        `정산 요청 시 사용자에게 요청 메시지를 보낼 수 있도록 Kakao Developer API의 <strong class= 'highlight'>로그인, 메시지 전송</strong>을 사용했습니다.`,
        `로그인 과정에서 얻는 <strong class= 'highlight'>token을 관리</strong>하고 이 token을 이용해 새로운 메시지 전송에 활용할 수 있도록 구현했습니다.`,
        `멀티 키워드 사용시 정산을 여러 요청할 수 있음을 고려하여 메시지 전송 전용 <strong class= 'highlight'>RESTful API</strong>를 구현했습니다.`,
      ],
    },
    {
      title: '공식 금융 상품 설명서 기반 LLM + RAG 챗봇 개발',
      content: [
        `<strong class= 'highlight'>업무 지원 AI 어시스턴스 개발 경험을 바탕</strong>으로 LLM과 RAG를 활용한 금융 고객을 위한 챗봇을 개발했습니다.`,
        `한국어 텍스트에서 <strong class= 'highlight'>불필요한 조사 및 어미를 제거</strong>하여 유사도 비교가 용이하도록 전처리했습니다.`,
        `<strong class= 'highlight'>자카드, 레벤슈타인, N-gram 유사도</strong>를 모두 고려하여 평균이 높은 유사도 순으로 <strong class= 'highlight'>top-k 문서</strong>를 정하여 검색하고 답을 얻도록 구현했습니다.`,
        `이때, 각 문서별로 <strong class= 'highlight'>메타데이터를 미리 생성</strong>하여 유사도 비교 시간을 단축하여 기존 pdf 전체 문서 검색 대비 <strong class= 'highlight'>평균 7.2s</strong>를 절약했습니다.`,
      ],
    },
  ],

  architectureImg: '/images/projects/project2/Architecture.jpg',
  architectureDetail: '',
  evaluation: '',
  awards: '디지털 하나로 1차 프로젝트 종합 2위',
};

export const Project3: myProjectProps = {
  projectImg: '/images/projects/project1/ggumtleIcon.png',
  title: 'abcdefGPT',
  subtitle: '생성형 AI 기반 부동산 선택 지원 서비스',
  date: '2023.08 ~ 2023.12',
  skills: [
    {
      category: 'skill',
      src: '/images/logos/react.png',
      name: 'React',
    },
    {
      category: 'skill',
      src: '/images/logos/javascript.png',
      name: 'JavaScript',
    },
    {
      category: 'skill',
      src: '/images/logos/css.svg',
      name: 'CSS',
    },
    {
      category: 'skill',
      src: '/images/logos/python.webp',
      name: 'Python',
    },
    {
      category: 'skill',
      src: '/images/logos/langchain.png',
      name: 'LangChain',
    },
    {
      category: 'skill',
      src: '/images/logos/openai.webp',
      name: 'OpenAI',
    },
    {
      category: 'skill',
      src: '/images/logos/colab.webp',
      name: 'Colab',
    },
  ],
  githubLink: '',
  githubLinkTitle: '',
  role: {
    name: '프론트엔드',
    detail: [''],
  },
  service: [
    {
      title: '',
      content: [''],
    },
  ],
  achievement: [
    {
      title: '',
      content: [''],
    },
  ],

  architectureImg: '',
  architectureDetail: '',
  evaluation: '',
  awards: '',
};
