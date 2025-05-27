import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Home.css';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="fixed-layout-wrapper">
      <section id="home" className={`home fixed-container ${darkMode ? 'dark-mode' : ''}`}>
        <div className="home-content fixed-content" data-aos="fade-up">
          <div className="about-image" data-aos="fade-right">
            <div className="image-placeholder">
              <img
                src="/photo.jpg"
                alt="Narmatha R"
              />
            </div>
          </div>
          <h1>Narmatha R</h1>
          <h2> Data Analyst  |  Aspring ML Engineer  |  Problem Solver </h2>
          <p>
            Passionate about uncovering patterns in data and building intelligent systems through Machine Learning and Data Science.
          </p>

          <div className="cta-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cta-secondary"
            >
              View Projects
            </Link>
          </div>
        </div>

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="scroll-down"
        >
          <ChevronDown size={30} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
