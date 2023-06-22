import {Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/navbar';
import AllRoutes from './Routes';

function App() { 
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
      
    </div>
  );
}

export default App;
