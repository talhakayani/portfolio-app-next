import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const getDisplay = arr => {
  const data = arr.map(project => {
    return (
      <div
        key={project.id}
        className="container-div "
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="title-container">
          <h3 className="project-title">{project.name}</h3>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <p className="date">
          {project.startDate} • {project.endDate}
        </p>
        <div className="tools">
          {project.tools.map(tool => {
            return <p key={tool}>{tool}</p>;
          })}
        </div>
        <p>{project.shortDescription}</p>
        <div className="orgnization-roll">
          <label>Orgnization</label>
          <p>{project.organization}</p>
        </div>
        <div className="orgnization-roll">
          <label>Role</label>
          <p>{project.role}</p>
        </div>
      </div>
    );
  });
  return data;
};

const IntroSocial = ({ intro }) => {
  const { projects } = intro;
  const odd = projects.filter((_, index) => (index + 1) % 2 != 0);
  const even = projects.filter((_, index) => (index + 1) % 2 == 0);

  return (
    <>
      <div style={{ gridColumn: 1, gridRow: 3 }}>{getDisplay(odd)}</div>
      <div style={{ gridColumn: 2, gridRow: 2 / 3 }}>{getDisplay(even)}</div>
    </>
  );
};

export default IntroSocial;
