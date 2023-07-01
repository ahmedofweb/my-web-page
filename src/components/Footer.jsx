import './Footer.css'

import { AiFillInstagram } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { BsGithub }from 'react-icons/bs'


function Footer() {
  return (
    <div className='footer'>
        <ul className="foot-pages">
            <li className="foot-pages-item">Frontend</li>
            <li className="foot-pages-item">Backend</li>
            <li className="foot-pages-item">Frontend</li>
            <li className="foot-pages-item">Portfolio</li>
        </ul>
        <ul className="contacts">
            <li className="contact-item"><a href="https://instagram.com/ahmedof1_?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram/></a></li>
            <li className="contact-item"><a href="https://t.me/abdulhamid_web"><BsTelegram/></a></li>
            <li className="contact-item"><a href=""><BiPhoneCall/></a></li>
            <li className="contact-item"><a href="https://github.com/ahmedofweb"><BsGithub/></a></li>
        </ul>
    </div>
  )
}

export default Footer