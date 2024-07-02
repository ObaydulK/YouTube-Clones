
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Recommended from './Component/Recommended/Recommended';
import Sideber from './Component/Sidebar/Sideber';
import Header from './Header';

function App() {
  return (
    < >
      <Header />

      <div className='flex col-span-12'>
      <Routes>
        {/* <Route path='/' element={} /> */}

      </Routes>
        <Sideber className=' ' />
        <Recommended className='   ' />
      </div>
    </>
  );
}

export default App;
