import { nanoid } from 'nanoid';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import cSharpImg from './assets/cSharpImg.svg';
import sqlImg from './assets/sqlImg.svg';
import angularjsImg from './assets/angularjsImg.svg';
import pccMain from './assets/pccMain.png';
import warehouseMain from './assets/warehouseMain.png';
import dashboardMain from './assets/dashboardMain.png';

import aeAnalysisPng from './assets/workProjects/pcc/aeAnalysis.png';
import exceptionPotsPng from './assets/workProjects/pcc/exceptionPots.png';
import kpiChartsPng from './assets/workProjects/pcc/kpiCharts.png';
import metalProductionPng from './assets/workProjects/pcc/metalProduction.png';

import warehouseHistoryPng from './assets/workProjects/warehouse/warehouseHistory.png';
import warehouseOrdersPng from './assets/workProjects/warehouse/warehouseOrders.png';

import dashboardExceptionPotsPng from './assets/workProjects/dashboard/dashboardExceptionPots.png';
import dashboardExceptionChartPng from './assets/workProjects/dashboard/dashboardExceptionChart.png';

export const links = [
  { id: nanoid(), href: '#skills', text: 'experience' },
  { id: nanoid(), href: '#projects', text: 'work projects' },
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

    projectID: 'pcc',
    title: 'Production Control Center',
    text: 'Serves as central location for accessing all process control information for the plant.',
  },
  {
    id: nanoid(),
    img: warehouseMain,
    projectID: 'warehouse',
    title: 'Warehouse',
    text: 'Application for ordering items from in-plant warehouse.  Also shows history of orders entered.',
  },
  {
    id: nanoid(),
    img: dashboardMain,
    projectID: 'dashboard',
    title: 'Dashboard',
    text: 'Dashboard that provides an overview of key process metrics for the plant.',
  },
];

export const workProjectDetails = [
  {
    id: 'pcc',
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
    id: 'warehouse',
    projectImages: [warehouseMain, warehouseOrdersPng, warehouseHistoryPng],
    imageDescriptions: [
      'Screen for entering orders.',
      'Shows latest orders entered and provides the ability to download a PDF of each entered order.',
      'Shows history of orders entered.  Allows data to be exported as a CSV file for analysis.',
    ],
  },
  {
    id: 'dashboard',
    projectImages: [
      dashboardMain,
      dashboardExceptionPotsPng,
      dashboardExceptionChartPng,
    ],
    imageDescriptions: [
      'Charts showing key metrics for the plant.',
      'Shows the number of exceptions in each category for each room.',
      'Shows chart of 30 day history for the exception selected.',
    ],
  },
];
