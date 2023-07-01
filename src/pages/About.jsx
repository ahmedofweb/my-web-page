// style
import './About.css'

//react / react-dom
import { Link } from "react-router-dom";
import { useState } from 'react';

// icons
import {IoIosArrowDown} from 'react-icons/io'

//context
import { ThemeContext } from '../components/Contex';
import { useContext } from 'react';



function About() {
  const obj = useContext(ThemeContext)
  const txt = obj.changeLang ? obj.uzb : obj.eng
  console.log(txt)
  const [showInfo , setShowInfo] = useState(false)
  return (
    <div>
      <ul className="list">
      <li className="item">
          <h1>{txt.about.aboutMe.title} <span onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true)}}><IoIosArrowDown/></span></h1>
          {showInfo && <p>
            {txt.about.aboutMe.text}
          </p>}
        </li>
        <li className="item">
          <h1>{txt.about.frontend.title}<span onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true)}}><IoIosArrowDown/></span></h1>
          { showInfo && <p>
            {txt.about.frontend.text}
          </p>}
        </li>
        <li className="item">
            <h1>{txt.about.backend.title}<span onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true)}}><IoIosArrowDown/></span></h1>
            {showInfo && <p>{txt.about.backend.text}</p>}
        </li>
        <li className="item">
            <h1>{txt.about.language.title}<span onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true)}}><IoIosArrowDown/></span></h1>
            {showInfo && <p>{txt.about.language.text}</p>}
        </li>
      </ul>
    </div>
  );
}

export default About;
