import React, { useState } from 'react';
import '../styles/Experience.css';
import { Building2, MapPin, CalendarDays } from 'lucide-react';

const ExperienceCard = ({ title, company, location, period, details }) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card">
        {/* Front Side */}
        <div className="card-front">
          <div style={{ height: '9px' }}></div>
          <h3 className="job-title">{title}</h3>
          <p className="company-info">
            <Building2 size={18} strokeWidth={1.5} />
            <span>{company}</span>
          </p>
          <p className="location-info">
            <MapPin size={16} strokeWidth={1.5} />
            <span>{location}</span>
          </p>
          <p className="date-info">
            <CalendarDays size={16} strokeWidth={1.5} />
            <span>{period}</span>
          </p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="details-content">
            <h4>Role Details</h4>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const internships = [
    {
      title: "FullStack Development Intern",
      company: "Accent Techno Soft",
      location: "Coimbatore, India",
      period: "10th Aug 2024 - 10th Sep 2024",
      details: "Worked on building responsive websites using HTML, CSS, and JavaScript. Developed React components and integrated backend APIs to create seamless user experiences."
    },
    {
      title: "Data Analytics Intern",
      company: "IBM",
      location: "Online",
      period: "17th March 2025 - 18th April 2025",
      details: "Assisted in collecting, cleaning, and preprocessing large datasets. Performed exploratory data analysis using Python and visualization tools. Helped train and evaluate machine learning models to extract actionable insights."
    }
  ];

  return (
    <div className="experience-section">
      <h2 className="section-title">Internship Experience</h2>
      <div className="cards-wrapper">
        {internships.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            company={item.company}
            location={item.location}
            period={item.period}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;