import './Info.css'

import { Link } from 'react-router-dom'

import { AiFillInstagram } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { FiCornerRightDown } from 'react-icons/fi'
import { BsGithub }from 'react-icons/bs'

import Footer from '../components/Footer'

//contex
import { useContext } from 'react'
import { ThemeContext } from '../components/Contex'


function Info() {
  const obj = useContext(ThemeContext)
  const txt = obj.changeLang ? obj.uzb : obj.eng
  return (
    <div className='info'>
        <h2>{txt.info.title}</h2>
        <p>{txt.info.text}<span><FiCornerRightDown/></span></p>
        <ul className='tarmoqlar'>
            <li className="tarmoqlar_item"><a href="https://instagram.com/ahmedof1_?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram/></a></li>
            <li className="tarmoqlar_item"><a href="https://t.me/abdulhamid_web"><BsTelegram/></a></li>
            <li className="tarmoqlar_item"><a href="tel:+998911234516"><BiPhoneCall/></a></li>
            <li className="tarmoqlar_item"><a href="https://github.com/ahmedofweb"><BsGithub/></a></li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Info