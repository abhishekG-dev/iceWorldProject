import './App.css';
import Footer from './component/Footer';
// import Header from './component/Header';
import Menu from './component/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EditIceCream from './component/EditIceCream';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Header /> */}
          <Navbar />
        <Routes>
          <Route exact path='/' element={<Menu/>} />
          <Route  path='/menu/:id' element={<EditIceCream/>} />
        </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
