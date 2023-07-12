import "./Footer.css";

import { Link } from 'react-router-dom'

import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { FcOpenedFolder } from "react-icons/fc";

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
          <li className="mobile-page-items"><Link to={'/'}>
              <AiTwotoneHome/>
            </Link></li>
          <li className="mobile-page-items"><Link to={'/about'}>
              <FcAbout/>
            </Link></li>
          <li className="mobile-page-items"><Link to={'/portfolio'}>
              <FcOpenedFolder/>
            </Link></li>
          <li className="mobile-page-items"><Link to={'/contact'}>
              <MdPermContactCalendar/>
            </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
