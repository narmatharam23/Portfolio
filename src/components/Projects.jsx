import React, { useState, useContext } from 'react';
import { Github, X } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Resume Parser",
      shortDescription: "Automated resume parsing and data extraction system",
      fullDescription:
        "Developed a robust resume parsing application that automatically extracts key information such as personal details, skills, education, and work experience from various resume formats (PDF, DOCX). Implemented Natural Language Processing (NLP) techniques and regex-based pattern matching to accurately structure unstructured data, enabling seamless integration with HR management systems and improving recruitment efficiency.",
      image: "https://a.storyblok.com/f/100314/2500x1793/c2b64780e9/adobestock_366966856.jpeg",
      technologies: ["Python", "NLP", "spaCy", "Regex", "Flask", "JavaScript"],
      github: "https://github.com/yourusername/resume-parser"
    },
    {
      id: 2,
      title: "News Headlines APP",
      shortDescription: "Real-time news headlines aggregator app",
      fullDescription:
        "Built a dynamic news app that fetches and displays the latest headlines from multiple sources in real-time. Integrated APIs to provide categorized news with keyword search, personalized feeds, and user-friendly UI for quick access to breaking news and trending stories.",
      image: "https://www.shutterstock.com/shutterstock/videos/1950820/thumb/9.jpg?ip=x480",
      technologies: ["Kotlin", "JavaScript", "React", "NewsAPI", "Axios", "CSS3"],
      github: "https://github.com/yourusername/news-headlines-app"
    },
    {
      id: 3,
      title: "Smart Water Level Monitoring System",
      shortDescription: "IoT-based real-time water level monitoring and alert system",
      fullDescription: "Designed and implemented an intelligent water level monitoring system using ultrasonic sensors connected to an Arduino. The system continuously measures water levels in tanks and sends real-time alerts via MQTT to a cloud dashboard. Enabled remote monitoring, automatic notifications for critical water levels, and data visualization for efficient water management.",
      image: "https://www.karikala.in/blog/wp-content/uploads/2022/05/4-2.jpg",
      technologies: ["Arduino", "Ultrasonic Sensor", "IoT", "MQTT", "Python", "Cloud"],
      github: "https://github.com/yourusername/smart-water-level-monitoring"
    },
    {
      id: 4,
      title: "Plant Leaf Disease Detection",
      shortDescription: "AI-driven system for detecting plant diseases from leaf images",
      fullDescription: "Created a deep learning-based web application that identifies plant diseases by analyzing leaf images...",
      image: "https://earthsally.com/wp-content/uploads/2021/03/leafspot-plant-disease.jpg",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV"],
      github: "https://github.com/your-username/leaf-disease-detection"
    },
    {
      id: 5,
      title: "Tokenized Asset Management",
      shortDescription: "Blockchain-based platform for secure and transparent asset tokenization",
      fullDescription: "Designed and developed a decentralized application (DApp) that enables tokenization and management of assets...",
      image: "https://th.bing.com/th/id/OIP.pn8gcnOclk2I6YEIStXXegAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com/your-username/tokenized-assets"
    },
    {
      id: 6,
      title: "Student Skill Development Platform",
      shortDescription: "AI-powered platform to assess and recommend skill growth paths for students",
      fullDescription: "Developed a web-based platform that evaluates student competencies and suggests personalized learning paths...",
      image: "https://www.industryconnect.org/wp-content/uploads/2023/02/skillsDev.jpg",
      technologies: ["Python", "Flask", "Fuzzy Logic", "Chart.js"],
      github: "https://github.com/your-username/skill-platform"
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                {project.github && (
                  <a
                    href={project.github}
                    className="github-button-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()} // prevents modal opening on GitHub click
                  >
                    <Github size={16} style={{ marginRight: '6px' }} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeProjectModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeProjectModal}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <p className="modal-description">{selectedProject.fullDescription}</p>
              <div className="modal-tech-stack">
                <h4>Technologies Used:</h4>
                <div className="tech-buttons">
                  {selectedProject.technologies.map((tech, idx) => (
                    <button key={idx} className="tech-button">{tech}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
