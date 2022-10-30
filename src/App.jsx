import './App.css';
import Home from './pages/home/Home'
import AboutUs from "./pages/aboutUs/AboutUs";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
   <NavBar title="MatchAnimals" />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs /> }/>
      <Route path='/contact' element={<Contact /> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
