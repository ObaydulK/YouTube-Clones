
import './App.css';
import Recommended from './Component/Recommended/Recommended';
import Sideber from './Component/Sidebar/Sideber';
import Header from './Header';

function App() {
  return (
    < >
      <Header />
      <div className='flex'>
        <Recommended className=' ' />
        <Sideber className='' />
      </div>
    </>
  );
}

export default App;
