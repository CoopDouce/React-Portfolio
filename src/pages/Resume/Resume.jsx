import "./Resume.css";

const Resume = () => {
    return (
        <div>
            <p
            style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                paddingTop: "25px",
            }}
            >
                Click to visit my&nbsp;
                <a
                href="https://profile.indeed.com/p/cooperd-5f1spgk"
                download
                className="resume-link"
                >
                Resume
                </a>
            </p>
            <div className="resume-container">
             <div>
                <p className="resume-section">Front-End Experience</p>
                <div className="resume-content">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </div>
                <div>
                    <p className="resume-section">Back-End Experience</p>
                    <div className="resume-content">
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>PostgreSQL</p>
                    </div>
             </div>
            </div>
        </div>
        </div>
    );
};
export default Resume;