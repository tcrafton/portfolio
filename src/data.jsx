import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import cSharpImg from './assets/cSharpImg.svg';
import sqlImg from './assets/sqlImg.svg';
import angularjsImg from './assets/angularjsImg.svg';
import pccMain from './assets/pccMain.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#about', text: 'about' },
];

export const skills = [
  // {
  //   id: nanoid(),
  //   title: 'HTML&CSS',
  //   icon: <FaHtml5 className="h-16 w-16 text-sky-700" />,
  //   text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Javascript',
  //   icon: <FaJs className="h-16 w-16 text-sky-700" />,
  //   text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  // },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-sky-700" />,
    text: 'Created several applications for entering and analyzing data.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className="h-16 w-16 text-sky-700" />,
    text: 'Setup Express server as an API endpoint and used to run several automated tasks.',
  },
  {
    id: nanoid(),
    title: 'AngularJS',
    icon: <img src={angularjsImg} className="h-16 w-16 text-sky-700" />,
    text: 'Created several applications for entering and analyzing data.',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <img src={cSharpImg} className="h-16 w-16 text-sky-700" />,
    text: 'Mainly used to create APIs for accessing SQL Server data with Entity Framework and by calling stored procedures.',
  },
  {
    id: nanoid(),
    title: 'SQL Server',
    icon: <img src={sqlImg} className="h-16 w-16 text-sky-700" />,
    text: 'Creating databases and stored procedures.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: './assets/pccMain.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Production Control Center',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
