import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className="bg-sky-700 py-24  ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl text-slate-50 font-bold tracking-wider">
            Tommy Crafton
          </h1>
          <p className="mt-4 text-3xl text-slate-50 capitalize tracking-wide">
            Programmer
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/tcrafton"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-50 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/tommycrafton/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-50 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block ">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
