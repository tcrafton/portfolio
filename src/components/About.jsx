import aboutSvg2 from '../assets/about2.svg';

import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg2} className="w-full h-30" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I have been programming for over 20 years, the majority of the time
            for an{' '}
            <a
              href="https://magnitude7metals.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-bold"
            >
              aluminum smelter
            </a>
            . I have also worked as a{' '}
            <a
              href="https://www.teamsparq.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-bold"
            >
              software consultant
            </a>{' '}
            and for a{' '}
            <a
              href="https://bigriversteel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-bold"
            >
              steel mill
            </a>
            . For the last 5 years I have mainly focused on building
            applications using AngularJS, NodeJS, React and SQL Server.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
