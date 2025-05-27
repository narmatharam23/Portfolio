import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="footer-content">
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Narmatha R. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
