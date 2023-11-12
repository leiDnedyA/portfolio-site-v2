import './App.css'

const GITHUB_LINK = 'https://github.com/leiDnedyA';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ayden-diel-9b0972191/';

function App() {

  return (
    <>
      <h1><strong>Hi, I'm Ayden :&#41;</strong></h1>
      <h3>I'm a <strong>programmer</strong> and <strong>computer science undergrad</strong>, based out of <strong>Boston, MA</strong>.</h3>
      <hr/>
      <h3>Check me out on <a href={GITHUB_LINK}>GitHub</a> and <a href={LINKEDIN_LINK}>LinkedIn</a>!</h3>
    </>
  )
}

export default App
