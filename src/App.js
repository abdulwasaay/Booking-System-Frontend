import { createRoutesFromElements , createBrowserRouter, Route } from 'react-router';
import './App.css';

function App() {
    createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>

            </Route>
        )
    )
}

export default App;
