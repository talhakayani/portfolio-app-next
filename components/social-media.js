import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = ({ socialMedia }) => {
  return (
    <div className="social-media-container container-div">
      <button className="btn">hit me up</button>
      <div>
        <a className="icon" href={socialMedia.linkedIn} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} color="#0e76a8" size="3x" />
        </a>

        <a className="icon" href={socialMedia.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} color="#171515" size="3x" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
