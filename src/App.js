import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard'; // Import the InfoCard component

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <InfoCard />
    </div>
  );
}

export default App;
