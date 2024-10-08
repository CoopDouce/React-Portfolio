import Project from "C:/Users/rapha/BootCamp/Projects/React-Portfolio/src/Components/Project/Project.jsx";
import "./Portfolio.css"; 
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { newbieFitImg, weatherAppImg, READMEImg, BYOCImg, EmployeeImg, PreworkImg } from "C:/Users/rapha/BootCamp/Projects/React-Portfolio/src/assets";

const Portfolio = () => {
    const projects = [
        {
            title: "NewbieFit",
            image: newbieFitImg,
            githubLink: "https://github.com/CoopDouce/NewbieFit-PJ1",
            deployedLink: "https://coopdouce.github.io/NewbieFit-PJ1/",
        },
        {
            title: "Weather App",
            image: weatherAppImg,
            githubLink: "",
        },
        {
            title: "README Generator",
            image: READMEImg,
            githubLink: "",
        },
        {
            title: "Build Your Own Car",
            image: BYOCImg,
            githubLink: "",
        },
        {
            title: "Employee Tracker",
            image: EmployeeImg,
            githubLink: "",
        },
        {
            title: "Prework",
            image: PreworkImg,
            githubLink: "",
        },
    ];

    return (
        <div className="project-display">
          <Row xs={1} md={3} className="g-4">
            {projects.map((project, index) => (
              <Col key={index}>
                <Project
                  key={index}
                  title={project.title}
                  image={project.image}
                  githubLink={project.githubLink}
                />
              </Col>
            ))}
          </Row>
        </div>
      );
    };
    
    export default Portfolio;