import React, { useContext } from 'react';
import { GraduationCap } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Education.css';

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  const educationHistory = [
    {
      id: 1,
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Anna University Regional Campus",
      location: "Coimbatore, India",
      duration: "2022 - 2026",
      CGPA: "8.93"
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Sri Ramakrishna Matric Higher Secondary School",
      location: "Perambalur, India",
      duration: "2020 - 2022",
      percentage: "92.6%"
    },
  ];

  return (
    <section id="education" className={`education ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education</h2>

        <div className="education-timeline">
          {educationHistory.map((item, index) => (
            <div 
              className="timeline-item" 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.duration}</div>
                <h3 className="timeline-title">{item.degree}</h3>
                <h4 className="timeline-institution">
                  {item.institution}, {item.location}
                </h4>
                {item.CGPA && <p className="edu-grade grade-black"><strong>CGPA:</strong> {item.CGPA}</p>}
                {item.percentage && <p className="edu-grade grade-black"><strong>Percentage:</strong> {item.percentage}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
