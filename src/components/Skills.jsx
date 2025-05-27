import React, { useContext } from 'react';
import {
  Code,
  Database,
  BarChart,
  Brain,
  PenTool as Tool,
  CheckCircle
} from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Skills.css';

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      skills: [
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'SciPy', logo: 'https://repository-images.githubusercontent.com/1825629/83ed2980-d433-11ea-8779-2e8021275385' },
        { name: 'Excel', logo: 'https://static.vecteezy.com/system/resources/previews/027/179/371/original/microsoft-excel-icon-logo-symbol-free-png.png' }
      ]
    },
    {
      id: 'visualization',
      title: 'Data Visualization',
      skills: [
        { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg' },
        { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Tensor Flow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'XGBoost', logo: 'https://uploads-ssl.webflow.com/625447c67b621ab49bb7e3e5/63c1c2b4348341745ad9f563_XGBoost-logo.png' },,
        { name: 'Theano', logo: 'https://th.bing.com/th/id/R.97818202b5d0fe7c59e2af417e34f4cb?rik=PugbTP9fwuNsTQ&riu=http%3a%2f%2fwww.microway.com%2fwp-content%2fuploads%2ftheano_logo_allblue_200x46.png&ehk=d58iFg%2bADRSOWEmcBPtN8tXgQdv6tqOj%2bwWJPt07wds%3d&risl=&pid=ImgRaw&r=0' },
      ]
    },
    {
      id: 'ml',
      title:'Web Technologies',
      skills: [
        { name: 'HTML', logo: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-1024.png' },
        { name: 'CSS', logo: 'https://img.favpng.com/14/24/13/css3-cascading-style-sheets-logo-html-markup-language-png-favpng-Tz7AH52MR4DVA6tRKXjDuWuYs.jpg' },
        { name: 'JavaScript', logo: 'https://seekvectors.com/files/download/JAVASCRIPT%20Logo.png' },
        { name: 'Bootstrap', logo: 'https://th.bing.com/th/id/R.76984d489016bb78c8c347e661bb8e94?rik=v6h54jhMOjGWxg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a76492bd73a4af5c5d4fb9.png&ehk=CCD7CF%2fzwR7i%2bBDVkut8Jbuzx%2bibavojdYkrIJG2PIc%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'MongoDB', logo: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg' },
        { name: 'Express.js', logo: 'https://th.bing.com/th/id/OIP.XQky1N0XySaAZjWJMmAgXgHaED?rs=1&pid=ImgDetMain' },
        { name: 'React.js', logo: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' },
        { name: 'Node.js', logo: 'https://icon-library.com/images/node-js-icon/node-js-icon-19.jpg' }, 
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: [
        { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Google Colab', logo: 'https://th.bing.com/th/id/OIP.laYIzRY2A-jpnBA2rO2jSQHaEj?rs=1&pid=ImgDetMain' },
        { name: 'Blender', logo: 'https://th.bing.com/th/id/OIP.eqTT2hc_UBNWy1bhlPt2ywHaEo?rs=1&pid=ImgDetMain'}
      ]
    }
  ];

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <div className="skill" key={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
