import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import About from './Components/about/about'
import Experience from './Components/experience/experience'
import Services from './Components/services/services'
import Portfolio from './Components/portfolio/portfolio'
import Testimonials from './Components/testimonials/testimonials'
import Contact from "./Components/contact/contact";
import Footer from './Components/footer/footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
