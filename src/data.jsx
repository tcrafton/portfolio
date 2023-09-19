import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import cSharpImg from './assets/cSharpImg.svg';
import sqlImg from './assets/sqlImg.svg';
import angularjsImg from './assets/angularjsImg.svg';
import pccMain from './assets/pccMain.png';

import aeAnalysisPng from './assets/workProjects/pcc/aeAnalysis.png';
import exceptionPotsPng from './assets/workProjects/pcc/exceptionPots.png';
import kpiChartsPng from './assets/workProjects/pcc/kpiCharts.png';
import metalProductionPng from './assets/workProjects/pcc/metalProduction.png';

const pccImages = import.meta.glob('./assets/workProjects/pcc/*');
const potLifeImages = import.meta.glob('./assets/workProjects/potLife/*');

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'experience' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#about', text: 'about' },
];

export const skills = [
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
    img: pccMain,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    projectID: 'pcc',
    title: 'Production Control Center',
    text: 'Serves as central location for accessing all process control information for the plant.',
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

export const workProjectDetails = [
  {
    id: 'pcc',
    //projectImages: import.meta.glob('./assets/pcc/*'),
    projectImages: [
      aeAnalysisPng,
      exceptionPotsPng,
      kpiChartsPng,
      metalProductionPng,
    ],
    imageDescriptions: [
      'Charts providing detailed analysis of anode effects occuring in the reduction cells, a critical metric for the aluminum reduction process.',
      'Provides ability to filter reduction cells by exception criteria to quickly see which cells need to be addressed.  Also able to see charts of key metrics, recent alarms issued and notes entered for the cell.',
      'Charts for analyzing key process indicators for each line of reduction cells.  Trends can be easily reviewed to determine if corrections need to be made.',
      'Detailed information on metal production.',
    ],
  },
  {
    id: 'potLife',
    //projectImages: import.meta.glob('./assets/pcc/*'),
    projectImages: potLifeImages,
  },
];
