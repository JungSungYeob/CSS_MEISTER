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

export const Project3: myProjectProps = {
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
