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
  console.log(txt.title)
  return (
    <div className='about'>
      {aboutTxt.map((item)=>{
        const [showInfo , setShowInfo] = useState(false)
        return (
          <div className="list" key={item.title}>
            <div className="item">
            {item.icons ? item.icons.map((icon) =>{
              return(
                  <img className='animate-icon' src={icon}/>
              )
            }) : ''}
              <span className='animate-icon'></span>
              <h1 onClick={()=>{
                setShowInfo(!showInfo)
                }}>{item.title} <span>{showInfo ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span></h1>
              {showInfo && 
                <div>
                  <p>{item.text}</p>
                  {item.skills && 
                  <div className='skills'>
                    <h3 style={{color: "red"}}>{txt.title == "O'zbek"? "Mutaxasislik:" : "Skills:"}</h3>
                    <div className='animate-skill'>
                    {item.skills && item.skills.map((skill) => {
                      return(
                        <h4 className='skill'>{skill}</h4>
                      )
                    })}
                    </div>
                  </div>
                  }
                </div>
              }
              {/* <img className='number-svg' src="./number-01.svg" alt="" /> */}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default About;
