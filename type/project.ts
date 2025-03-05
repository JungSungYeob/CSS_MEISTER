import { Url } from 'next/dist/shared/lib/router/router';
import { mySkillsProps } from './aboutMe';

type roleProps = {
  name: string;
  detail: string[];
};

type achievementProps = {
  title: string;
  content: string[];
};

type serviceProps = achievementProps;

export type myProjectProps = {
  projectImg: string;
  title: string;
  subtitle: string;
  date: string;
  skills: mySkillsProps[];
  githubLink: Url;
  githubLinkTitle: string;
  role: roleProps;
  service: serviceProps[];
  achievement: achievementProps[];
  architectureImg: string;
  architectureDetail?: string;
  evaluation: string;
  awards: string;
};
