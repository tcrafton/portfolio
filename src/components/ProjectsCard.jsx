import { useRef, useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import CustomModal from './CustomModal';
import { workProjectDetails } from '../data';

const ProjectsCard = ({ url, img, github, title, text, projectID }) => {
  const projectDetailModal = useRef(null);
  const [selectedProject, setSelectedProject] = useState({});

  const showProjectDetails = (projectID) => {
    setSelectedProject(workProjectDetails.find(({ id }) => id === projectID));
    projectDetailModal.current.open();
  };

  return (
    <>
      <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64 border-[5px]"
        />
        <div className="p-8">
          <h2 className="text-xl tracking-wide font-medium">{title}</h2>
          <p className="mt-4 text-slate-700 leading-loose">{text}</p>
          <div className="mt-4 flex gap-x-4">
            <button onClick={() => showProjectDetails(projectID)}>
              <BsFillInfoCircleFill className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </button>
          </div>
        </div>
      </article>

      <CustomModal ref={projectDetailModal} className="projectDetailModal">
        <h2 className="font-bold text-2xl underline">Project Details</h2>
        {selectedProject['projectImages'] &&
          selectedProject['projectImages'].map((project, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-2 grid-flow-col gap-5 py-1"
              >
                <div className="flex items-center justify-center">
                  <p className="col-span-3 w-[40vh] font-serif font-bold text-xl shadow-xl p-4 bg-slate-500 text-white rounded-md">
                    {selectedProject['imageDescriptions'][index]}
                  </p>
                </div>
                <img
                  src={`${project}`}
                  alt="projectImage"
                  className="col-span-8 w-[120vh] h-[60vh]"
                />
              </div>
            );
          })}
      </CustomModal>
    </>
  );
};
export default ProjectsCard;
