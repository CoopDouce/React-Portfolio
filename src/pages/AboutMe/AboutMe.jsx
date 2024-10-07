import "./AboutMe.css";
import ProfilePic from "../../assets/ProfilePic.jpg";

const AboutMe = () => {
    return (
        <div style={{paddingTop:"25px"}}>
            <h1>About Me</h1>
            <img src={ProfilePic} alt="Profile Pic" />
        <div className="about-me-content">
            <p>
            I am a software engineer with a passion for web development. I have experience with React, Node.js, and Express.js. I am currently learning TypeScript and GraphQL. I am excited to learn new technologies and build amazing web applications.
            </p>
            <p>
            I am a graduate of the University of California, San Diego with a Bachelor of Science in Computer Science. I have experience working in a team environment and have excellent communication skills. I am a quick learner and am always looking for ways to improve my skills.
            </p>
        </div>
        </div>
    );
}


export default AboutMe;