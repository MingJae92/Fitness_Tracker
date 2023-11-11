import logo from './logo.svg';
import './App.css';
import { Route, Routes, Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     <Footer/>

    </div>
  );
}

export default App;
