import './App.css'
import TypingText from './Components/TypingText';

const GITHUB_LINK = 'https://github.com/leiDnedyA';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ayden-diel-9b0972191/';

function App() {

  return (
    <>
      <TypingText>&gt; Hi, I'm Ayden :&#41;</TypingText>
      <h3>I'm a <strong>programmer</strong> and <strong>computer science undergrad</strong>, based out of <strong>Boston, MA</strong>.</h3>
      <h3>Check me out on <a href={GITHUB_LINK}>GitHub</a> and <a href={LINKEDIN_LINK}>LinkedIn</a>!</h3>
      <hr/>
      <div>
        <h2>My <strong>Work</strong> Experience</h2>
        <div className="experience-grid">
          <div>
            <p>Software Engineer Intern</p>
            <p><a href="https://presskit.ai/">PressKit.ai</a></p>
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Some other third thing</li>
            </ul>
          </div>
          <div>
            <p>Research Assistant</p>
            <p>UMass Boston / <a href="https://github.com/racketscript/racketscript">RacketScript</a></p>
          </div>
          <div>
            <p>Teaching Assistant</p>
            <p>UMass Boston / <a href="https://courses.umb.edu/course_catalog/course_info/ugrd_cs_all_110">Intro to CS</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
