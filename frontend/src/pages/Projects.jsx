import projects from "../data/projects";

function Projects() {
    return (
       <section>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <article key={index} style={{ marginBottom: "2rem "}}>
                    <header>    
                         <h3>{project.title}</h3>
                         {project.tools && (
                        <p><strong>Tools & Tech:</strong>{project.tools.join(", ")}</p>
                    )}
                    </header>
                   
                    <p>{project.description}</p>
                    
                    {project.link && (
                        <p><a href={project.link} target="_blank" rel="noreferrer">View Project &rarr;</a></p>
                    )}
                </article>
            ))}
       </section>
    )
}

export default Projects