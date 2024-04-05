import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./WhoAmIFrame.css";

const WhoAmIFrame: FC = () => (
    <div className="profile-card">
        <span className="profile-card-image">
            <img className="profile-card-image" src="https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg" alt="Me" />
        </span>
        <div className="profile-card-content">
            <i className="profile-card-email">david2005.rosental.work@gmail.com</i>
            <div className="link-icon-container">
                <a className="social-link" href="https://www.linkedin.com/in/david-rosental/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" /></a>
                <a className="social-link" href="https://github.com/LittleAksMax"><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></a>
            </div>
        </div>

    </div>
);

export default WhoAmIFrame;