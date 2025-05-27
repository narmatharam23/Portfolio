import React, { useState, useRef, useContext } from 'react';
import { Send, Linkedin, Github, Mail, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import ThemeContext from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    });

    // This would use actual EmailJS service, user, and template IDs in a real implementation
    emailjs.sendForm(
      'service_id', 
      'template_id', 
      formRef.current, 
      'user_id'
    )
    .then(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: 'Your message has been sent. I will get back to you soon!'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Email send failed:', error);
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    });

    // For demo purposes only (since we don't have actual EmailJS credentials)
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: 'Your message has been sent. I will get back to you soon!'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p>
              I'm open to job opportunities, collaborations, or just a friendly chat about data science and AI. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <ul className="contact-details">
              <li>
                <Mail size={20} />
                <a href="mailto:rahul.r@example.com">narmatharamasamy5@gmail.com</a>
              </li>
              <li>
                <Phone size={20} />
                <a href="tel:+919488503209">+91 6369359396</a>
              </li>
              <li>
                <Linkedin size={20} />
                <a href="https://www.linkedin.com/in/narmatha-ramasamy-013a69257/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/narmatha
                </a>
              </li>
              <li>
                <Github size={20} />
                <a href="https://github.com/narmatharam23" target="_blank" rel="noopener noreferrer">
                  github.com/narmatha
                </a>
              </li>
            </ul>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="mailto:rahul.r9488@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="contact-form" data-aos="fade-left">
            <h3>Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'} 
                <Send size={16} />
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;