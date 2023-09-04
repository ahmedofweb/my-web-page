// style
import './About.css'

//react / react-dom
import { Link } from "react-router-dom";
import { useState } from 'react';

// icons
import {MdKeyboardArrowDown} from 'react-icons/md'
import { MdKeyboardArrowUp } from 'react-icons/md'

//context
import { ThemeContext } from '../components/Contex';
import { useContext } from 'react';



function About() {
  const obj = useContext(ThemeContext)
  const txt = obj.changeLang ? obj.uzb : obj.eng
  const aboutTxt = txt.about
  console.log(aboutTxt)
  return (
    <div>
      {aboutTxt.map((item)=>{
        const [showInfo , setShowInfo] = useState(false)
        return (
          <div className="list" key={item.title}>
            <div className="item">
            {item.icons ? item.icons.map((icon) =>{
              return(
                  <span className='animate-icon'>{icon}</span>
              )
            }) : ''}
              <span className='animate-icon'></span>
              <h1 onClick={()=>{
                setShowInfo(!showInfo)
                }}>{item.title} <span>{showInfo ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span></h1>
              {showInfo && <p>{item.text}</p>}
              {/* <img className='number-svg' src="./number-01.svg" alt="" /> */}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default About;
