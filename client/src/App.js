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
      <div className="about-me">
        <h2>About Me</h2>
        <p></p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div>
          <a href="https://hrisso.github.io/fitness-project/">
            <img src={p1} alt="project 1" />
          </a>
          <a href="https://modest-poincare-a94579.netlify.app/">
            <img src={p2} alt="project 2" />
          </a>
          <a href="https://linterna-lamps.netlify.app/">
            <img src={p3} alt="project 3" />
          </a>
          <a href="https://bookclub-project.netlify.app/">
            <img src={p4} alt="project 4"/>
          </a>
        </div>
      </div>
      <div className="contact">
        <h2>Get In Touch</h2>
        <a href="mailto:heather.risso@gmail.com">heather.risso@gmail.com</a>
        <a href="tel:+9785051738">978-505-1738</a>
      </div>
    </div>
  );
}

export default App;
