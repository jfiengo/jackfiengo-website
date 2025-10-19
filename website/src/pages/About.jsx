import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './About.css';

export default function About() {
  return (
    <Layout backgroundVariant="about">
      <div className="content">
        <h1 className="page-title">ABOUT ME</h1>

        <div className="about-section">
          <div className="bio">
            <h2>Who I Am</h2>
            <p>
              I'm Jack Fiengo, a current software engineer with end-to-end experience passionate about researching and integrating emerging technologies. My work has primarily focused on helping transform the healthcare space, but I'm eager for opportunities to leverage innovation for broader societal impact.
            </p>

            <p>
              My approach combines strategic thinking with execution, helping businesses achieve their goals through techincal strategy, design, and development.
            </p>

            <h2>My Expertise</h2>
            <ul>
              <li>Product Vision</li>
              <li>Backend Development</li>
              <li>Brand Strategy</li>
              <li>Cloud Hosted Solutions</li>
              <li>Artificial Intelligence</li>
            </ul>

            <p>
              When I'm not designing or coding, you can find me exploring new technologies, enjoying the outdoors, or researching my other interests such as politics, economics, and hard sciences.
            </p>

            <Link to="/" className="button">Back to Home</Link>
          </div>

          <div className="gallery">
            <div className="image-container">
              <img src="/images/ProfilePicture.jpg" alt="Profile photo" />
              <div className="image-overlay">
                <h3 className="image-title">Professional</h3>
                <p className="image-description">Hiking in Colorado</p>
              </div>
            </div>

            <div className="image-container">
              <img src="/images/AnnecyLake.jpg" alt="Lake Annecy" />
              <div className="image-overlay">
                <h3 className="image-title">Lake Annecy</h3>
                <p className="image-description">Lake Annecy</p>
              </div>
            </div>

            <div className="image-container">
              <img src="/images/ChamonixMountains.jpg" alt="Chamonix" />
              <div className="image-overlay">
                <h3 className="image-title">Chamonix</h3>
                <p className="image-description">Chamonix</p>
              </div>
            </div>

            <div className="image-container">
              <img src="/images/SwissCows.jpg" alt="Swiss Cows" />
              <div className="image-overlay">
                <h3 className="image-title">Swiss Cows</h3>
                <p className="image-description">Swiss Cows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
