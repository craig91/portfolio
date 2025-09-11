import experience from "../data/experience";
function Experience() {
    return (
        <section>
            <h2>Experience</h2>
            {experience.map((job, index) =>(
                <article key={index}>
                    <header>
                    <h3>{job.theme}</h3>
                    </header>
                    <p>{job.content}</p>
                    </article>
            ))}
        </section>
    );
}

export default Experience;