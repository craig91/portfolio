import experience from "../data/experience";
function Experience() {
    return (
        <div>
            <h2>Experience</h2>
            {experience.map((job, index) =>(
                <div key={index}>
                    <h3>{job.company}</h3>
                    <p><strong>Role:</strong>{job.role}</p>
                    <p><strong>Location:</strong>{job.location}</p>
                    <p><strong>Duration:</strong>{job.duration}</p>
                    {job.details.length > 0 && (
                        <ul>
                            {job.details.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                    </div>
            ))}
        </div>
    );
}

export default Experience;