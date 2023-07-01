import "./App.css";

// components
import Header from "./components/Header";

// pages
import Info from "./pages/Info";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

// react
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Info/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
