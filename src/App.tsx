import './App.css'

const GITHUB_LINK = 'https://github.com/leiDnedyA';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ayden-diel-9b0972191/';

function App() {

  return (
    <>
      <h1>Hi, I'm Ayden :&#41;</h1>
      <h3>I'm a programmer and computer science undergrad, based out of Boston, MA.</h3>
      <h3>Check me out on <a href={GITHUB_LINK}>GitHub</a> and <a href={LINKEDIN_LINK}>LinkedIn</a>!</h3>
      <hr/>
    </>
  )
}

export default App
