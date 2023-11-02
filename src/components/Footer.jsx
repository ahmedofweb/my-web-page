import "./Footer.css";

import { Link } from 'react-router-dom'

import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import { AiTwotoneHome } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { MdPermContactCalendar } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

//context
import { useContext } from "react";
import { ThemeContext } from "./Contex";

function Footer() {
  const obj = useContext(ThemeContext)
  const txt = obj.changeLang ? obj.uzb : obj.eng
  return (
    <div className="footer">
      <div className="mobile">
        <ul className="mobile-pages">
          <li className="mobile-page-items"><Link className="mobile-page-icons"  to={'/'}>
              <AiTwotoneHome/>
            </Link></li>
          <li className="mobile-page-items"><Link className="mobile-page-icons" to={'/about'}>
              <SiGooglemessages/>
            </Link></li>
          <li className="mobile-page-items"><Link className="mobile-page-icons" to={'/portfolio'}>
              <FaFolderOpen/>
            </Link></li>
          <li className="mobile-page-items"><Link className="mobile-page-icons" to={'/contact'}>
              <MdPermContactCalendar/>
            </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
