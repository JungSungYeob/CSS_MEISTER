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
  service: '',
  achievement: [
    {
      title: '적응형 디자인 적용',
      content: [
        '서비스 특성 상 웹, 모바일 환경 어디서든 사용이 가능해야 했습니다.',
        '컴퓨터, 태블릿, 스마트폰 각각의 환경에 맞춘 화면을 설계하였고, 이는 Tailwind CSS를 이용하여 환경의 너비에 따른 화면 구성을 다르게 개발했습니다.',
        '추가적으로 PWA(Progressive Web Apps)을 도입하여 마치 어플리케이션처럼 등록이 가능하도록 구현했습니다.',
      ],
    },
    {
      title: '커뮤니티 TBT(Total Blocking Time) 개선',
      content: [
        '커뮤니티 글을 페이지로 나누어 관리할 수 있으나 사용자 경험이 떨어진다 판단하여 한 페이지로 보이도록 설계했습니다.',
        '그러나 전체 데이터를 한번에 불러오는 것은 로딩 속도가 오래 걸린다는 단점이 있었고 실제로 TBT가 1.7s로 사용성이 불편했습니다.',
        '이 문제를 해결하기 위해 웹 브라우저의 네이티브 JavaScript API인 Intersection Observer를 활용하여 useInfiniteScroll 커스텀 훅을 구현했습니다.',
        '이 훅은 무한 스크롤 기능을 제공하며, 초기 로딩 시에는 10개의 데이터만 fetching하고, 사용자가 마지막 데이터 요소까지 스크롤하면 추가 데이터를 로드하는 방식으로 구현했습니다.',
        '이를 통해 LightHouse 성능 점수를 47% 향상시켰고 TBT는 0.3s로 단축시켰습니다.',
        `<div>hi</div>`,
      ],
    },
  ],
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
    ],
  },
  architectureImg: '/images/projects/project1/Architecture.png',
  architectureDetail: '',
  evaluation: '',
  awards: '디지털 하나로 2차 프로젝트 종합 2위',
};
