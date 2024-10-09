import React from "react";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© 2024 Cooper Doucette</p>
      <div>
        <a className="social-icons"
            href="https://profile.indeed.com/p/cooperd-5f1spgk"
        >
            <SiIndeed style={{ fontSize: "30px" }} />
        </a>
        <a className="social-icons"
            href="https://github.com/CoopDouce"
        >
            <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a className="social-icons"
            href="https://stackoverflow.com/users/27638236/cooper-doucette"
        >
            <FaStackOverflow style={{ fontSize: "30px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;