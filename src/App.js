import './App.css';
import  Navbar from '../src/components/navbar/navbar'
import  Hero from '../src/components/hero/hero'
import  Menu from '../src/components/menu/menu'
import  Testimonial from '../src/components/testimonial/testimonial'
import  About from '../src/components/about/about'
import  Footer from '../src/components/footer/footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Testimonial/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
