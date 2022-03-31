import './App.css';
import Footer from './component/Footer';
// import Header from './component/Header';
import Menu from './component/Menu';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import EditIceCream from './component/EditIceCream';
import Navbar from './component/Navbar';
// import IceCreamCard from './component/IceCreamCard';
import IceCreamStock from './component/IceCreamStock';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Header /> */}
          <Navbar />
        <Routes>
          <Route exact path='/' element={<Menu/>} />
          <Route  path='/menu/:id' element={<EditIceCream/>} />
          <Route path='/menu/stocks/additem' element={<IceCreamStock />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
