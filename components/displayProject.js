import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const DisplayProject = ({ project }) => {
  return (
    <div
      key={project?.id}
      className="container-div "
      style={{ backgroundColor: project?.backgroundColor, marginTop: "1rem" }}
    >
      <div className="title-container">
        <h3 className="project-title">{project?.name}</h3>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <p className="date">
        {project?.startDate} • {project?.endDate}
      </p>
      <div className="tools">
        {project?.tools?.map((tool) => {
          return <p key={tool}>{tool}</p>;
        })}
      </div>
      <p>{project?.description}</p>
      <div className="orgnization-roll">
        <label>Orgnization</label>
        <p>{project?.organization}</p>
      </div>
      <div className="orgnization-roll">
        <label>Role</label>
        <p>{project?.role}</p>
      </div>
    </div>
  );
};

export default DisplayProject;
