
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Nevber from './Component/Pages/Nevber/Nevber';
import Home from './Component/Pages/Home/Home';

function App() {
  return (
    < >
      <Nevber />
      <Routes>
        <Route path='/' element={<Home/>} />
        
      </Routes>
    </>
  );
}

export default App;
