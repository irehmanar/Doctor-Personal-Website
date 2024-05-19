import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-item privacy">
                </div>
                <div className="footer-item copyright">
                    <span className="text-gray-400" style={{ paddingRight: 5 }}>Copyright</span>
                    <FontAwesomeIcon icon={faCopyright} />
                    <span className="text-gray-400" style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Nutri-Clinic All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/irehmanar/Doctor-Personal-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item social github"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item social facebook"
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item social youtube"
                    aria-label="YouTube"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
