import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={`about ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-left">
            <h2>Hello, I'm Narmatha R</h2>
            <div style={{ height: '15px' }}></div>
            <p>
              I am currently pursuing a B.Tech in Artificial Intelligence and Data Science, with a strong interest in leveraging data to solve practical challenges. Through academic training and hands-on projects, I have developed a solid foundation in statistics, Python programming, and data analysis. I am particularly interested in the role of analytics in driving business intelligence and operational efficiency. My goal is to become a data analyst who transforms complex data into meaningful insights that support strategic decision-making and measurable outcomes.
            </p>

            {/* Action Buttons */}
            <div className="about-buttons" data-aos="fade-up">
              <a
                href="./Resume Narmatha.pdf"
                download
                className="btn resume-btn"
              >
                Download Resume
              </a>
              <button
                className="btn contact-btn"
                onClick={handleScrollToContact}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
