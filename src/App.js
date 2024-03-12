import { useEffect } from 'react';
import './App.css';
import Layout from './components/hotels-components/Layout'

function App() {
  let data = [JSON.stringify({fName: "first name", lName: "last name", email: "example123@gmail.com", password: "Strong123"})]
  useEffect(()=>{
    localStorage.setItem("user",`[${data}]`);
  },[])
  
  return <Layout />
  
}

export default App;
