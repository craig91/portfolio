import projects from "../data/projects";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: "2rem "}}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.tools && (
                        <p><strong>Tools & Tech:</strong>{project.tools.join(", ")}</p>
                    )}
                    {project.link && (
                        <p><a href={project.link} target="_blank" rel="noreferrer">View Project</a></p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Projects