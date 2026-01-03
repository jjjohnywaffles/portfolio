import {
  Navigation,
  Hero,
  About,
  Education,
  Skills,
  Experience,
  Projects,
  Contact,
} from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
