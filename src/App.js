import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buses from './pages/Buses/buses';
import BusOrderPage from './pages/Buses/BusesOrder';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/buses/' element={<Buses />} />
        <Route path='/buses/ordernow' element={<BusOrderPage />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
