import './Contact.css'

import { AiFillInstagram } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { FiCornerRightDown } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { SiNetlify } from 'react-icons/si'

function Contact() {
  return (
    <div>
        <ul className="contact_list">
            <li className="contact_item"><a href="tel:+998911234516"><BiPhoneCall/> Qo'ngiroq qilish</a></li>
            <li className="contact_item"><a href="https://t.me/abdulhamid_web"><BsTelegram/> Telegramdan yozish</a></li>
            <li className="contact_item"><a href="https://instagram.com/ahmedof1_?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram/> Instagramdan yozish</a></li>
            <li className="contact_item"><a href="https://github.com/ahmedofweb"><BsGithub/> Github profil</a></li>
            <li className="contact_item"><a href="https://app.netlify.com/teams/ahmedofweb/overview"><SiNetlify/> Netlify profil</a></li>
        </ul>
    </div>
  )
}

export default Contact