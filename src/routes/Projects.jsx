import { useState } from "react";
import { PROJECTS } from "../utils/constants";
import "./Projects.scss";

const Projects = () => {
  const [current, setCurrent] = useState(2);

  const renderListItem = ({ type, description }, index) => {
    const isCurrent = index === current;
    const titleClassName = `project__title${isCurrent ? "--current" : ""}`;
    return (
      <li key={type} className="project" onClick={() => setCurrent(index)}>
        <h2 className={titleClassName}>{type}</h2>
        {isCurrent && <p className="project__description">{description}</p>}
      </li>
    );
  };

  return (
    <div className="projects">
      <ul className="projects__list">{PROJECTS.map(renderListItem)}</ul>
      <div className="projects__content">{PROJECTS[current].content}</div>
    </div>
  );
};

export default Projects;
