// iport React from 'react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongo.png';
import pythonLogo from '../assets/python.png';
import aiLogo from '../assets/ai.png';

const skills = [
  { name: 'HTML5', img: htmlLogo, type: 'Frontend' },
  { name: 'CSS3', img: cssLogo, type: 'Frontend' },
  { name: 'JavaScript', img: jsLogo, type: 'Frontend' },
  { name: 'React', img: reactLogo, type: 'Frontend' },
  { name: 'Node.js', img: nodeLogo, type: 'Backend' },
  { name: 'MongoDB', img: mongoLogo, type: 'Database' },
  { name: 'Python', img: pythonLogo, type: 'AI Tools' },
  { name: 'AI/ML', img: aiLogo, type: 'AI Tools' }
];

const Skills = () => (
  <section id="skills" className="py-5" style={{background: '#fff'}}>
    <div className="container">
      <h2 className="mb-4 fw-bold" style={{color: '#ff9800'}}>Skills & Tools</h2>
      <div className="row g-4">
        {skills.map((skill, idx) => (
          <div className="col-6 col-md-3 text-center" key={idx}>
            <div className="p-3 bg-white rounded shadow-sm h-100">
              <img src={skill.img} alt={skill.name} style={{height: 48, marginBottom: 8}} />
              <h6 className="fw-bold mt-2" style={{color: '#ff9800'}}>{skill.name}</h6>
              <small className="text-muted">{skill.type}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
// 