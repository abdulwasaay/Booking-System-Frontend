import './App.css';
import { Flights } from './components/flights/Flights';
import '../src/components/flights/Flights.css';
import { About } from './pages/About.jsx';
import './pages/About.css';
function App() {
    return (
        <>
            <Flights />
            {/* <About /> */}
        </>
    );
}

export default App;
