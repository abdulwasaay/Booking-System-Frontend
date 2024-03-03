import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buses from './pages/Buses/buses';
import BusOrderPage from './pages/Buses/BusesOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/buses/' element={<Buses />} />
        <Route path='/buses/ordernow' element={<BusOrderPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
