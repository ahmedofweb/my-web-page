import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Info from "./pages/Info";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

// react
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {document.body.classList.add('dark')}
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Info/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
