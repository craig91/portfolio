import experience from "../data/experience";
function Experience() {
    return (
        <section>
            <h2>Experience</h2>
            {experience.map((job, index) =>(
                <article key={index}>
                    <header>
                    <h3>{job.role}</h3>
                    <p>
                        <strong>{job.company}</strong> &middot; {job.duration}
                    </p>
                    </header>
                    {job.details.length > 0 && (
                        <ul>
                            {job.details.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                    </article>
            ))}
        </section>
    );
}

export default Experience;