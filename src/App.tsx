import './App.css'
import { ExperienceColumn, ExperienceEntry } from './Components/ExperienceColumn';
import TypingText from './Components/TypingText';

const GITHUB_LINK = 'https://github.com/leiDnedyA';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ayden-diel-9b0972191/';

const EXPERIENCE_ENTRIES : ExperienceEntry[]= [
  {
    title: 'Software Engineer Intern',
    company: 'PressKit.ai',
    dates: 'September 2023 - now',
    link: 'https://presskit.ai/',
    bullets: [
      'Implemented many *frontend features* using *JavaScript*, *HTML*, *CSS*, and *Bootstrap* which were used by hundreds of paying clients.',
      'Created a *web scraper* using *Python*, *Selenium*, and *PyMongo* allowing for automatic updating of data in our DB.'
    ]
  },
  {
    title: 'Undergrad Researcher',
    company: 'UMass Boston / RacketScript',
    dates: 'May 2023 - August 2023',
    link: 'https://github.com/racketscript/racketscript',
    bullets: [

    ]
  },
  {
    title: 'Teaching Assitant',
    company: 'UMass Boston / Intro to CS',
    dates: 'January 2023 - May 2023',
    link: 'https://courses.umb.edu/course_catalog/course_info/ugrd_cs_all_110',
    bullets: []
  }
]

function App() {

  return (
    <>
      <TypingText>&gt; Hi, I'm Ayden :&#41;</TypingText>
      <h3>I'm a <strong>full-stack developer</strong> and <strong>computer science student</strong>, based out of <strong>Boston, MA</strong>.</h3>
      <h3>Check me out on <a href={GITHUB_LINK}>GitHub</a> and <a href={LINKEDIN_LINK}>LinkedIn</a>!</h3>
      <hr />
      <h2>My <strong>Work</strong> Experience</h2>
      <div className="experience-grid">
        <ExperienceColumn entryData={EXPERIENCE_ENTRIES[0]}/>
        <ExperienceColumn entryData={EXPERIENCE_ENTRIES[1]}/>
        <ExperienceColumn entryData={EXPERIENCE_ENTRIES[2]}/>
      </div>
      <hr />
    </>
  )
}

export default App
