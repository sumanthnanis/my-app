import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="MY-APP" />
    <div className="container my-3">
      <h1>Enter the text to analyze</h1>
    <Textform  heading="Enter your story"/>
    </div>
    <div className="container my-3">
    <About />
    </div>
    </>  
  );
}

export default App;
