import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import About from './components/about/about';
import  TableBookingForm from './pages/bookingForm/bookingForm'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path = 'reservation' element = {<TableBookingForm/>}/>
        <Route path = 'about' element = {<About/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
