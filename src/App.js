import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';
import NotFound from './NotFound';
import Region from './Region';


function App() {

  return (
    <Router>
    <div id='main' className="text-gray-900 bg-white">
      <nav className='py-4 shadow-md bg-white px-4 md:px-14 flex justify-between items-center'>
        <h1 className='font-extrabold text-lg md:text-2xl'>Where in the world?</h1>
        <p className='font-bold text-md text-gray-800'><i className="fa fa-moon"></i> Dark Mode</p>
      </nav>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/country/:name" element={ <CountryDetails /> } />
        <Route path="/region/:region" element={ <Region /> } />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
