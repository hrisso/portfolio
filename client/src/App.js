import './App.css';
import p1 from './assets/P1.png';
import p2 from './assets/P2.png';
import p3 from './assets/P3.png';
import p4 from './assets/P4.png';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="background-image"></div>
      <div id="about-me">
        <h2>About Me</h2>
        <p>Hi, I'm Heather. I’m a full-stack software engineer with a passion for solving complex problems and building high-quality software. With over 8yrs experience in the industry as a scrum master and agile coach, I’ve gained technical skills as well as collaboration skills along the way. I’ve always been passionate about software which inspired me to pursue software engineering as a career. I’m excited to bring my experience in agile software environments to a mission-driven organization that can foster my growth.</p>
        <div className="button">
          <a href="https://www.linkedin.com/in/heatherrisso/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
      <div id="projects">
        <h2>Projects</h2>
        <div className="project-group">
          <div className="project-tile">
            <a href="https://hrisso.github.io/fitness-project/" target="_blank" rel="noopener noreferrer">
              <img src={p1} alt="project 1" />
              <h3>Get Fit</h3>
              <p>Web app for filtering exercises from a 3rd party API using javascript and DOM manipulation</p>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://modest-poincare-a94579.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={p2} alt="project 2" />
              <h3>Volleyball Playbook</h3>
              <p>Volleyball web app with full CRUD using React and an Airtable backend</p>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://linterna-lamps.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={p3} alt="project 3" />
              <h3>Linterna</h3>
              <p>Lamp appreciation web app with authentication and full CRUD using MongoDB, Express, and React</p>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://bookclub-project.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={p4} alt="project 4" />
              <h3>Bookclub</h3>
              <p>Bookclub web app with authentication and full CRUD built with Ruby on Rails and React</p>
            </a>
          </div>
          <div className="button">
            <a href="https://github.com/hrisso" target="_blank" rel="noopener noreferrer">View on Github</a>
          </div>
        </div>
      </div>
      <div className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-section">
          <p>Boston, MA</p>
          <a href="mailto:heather.risso@gmail.com"><p>heather.risso@gmail.com</p></a>
          <p>978-505-1738</p>
          <a href="https://github.com/hrisso" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
          <a href="https://www.linkedin.com/in/heatherrisso/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
        </div>
      </div>
    </div>
  );
}

export default App;
