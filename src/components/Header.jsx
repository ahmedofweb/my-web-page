import "./Header.css";
import '../pages/Modal.css'

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { FcOpenedFolder } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { LuLanguages } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

//context
import { useContext } from "react";
import { ThemeContext } from "./Contex";


function Header() {

  const obj = useContext(ThemeContext)
  const setChangeLang = obj.setChangeLang
  const txt = obj.changeLang ? obj.uzb : obj.eng

  const [dropdown, setDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header">
      <h1 className="logo_name">
        <span>
          <CgProfile />
        </span>
        {txt.header.name}
      </h1>
      <ul className="pages-list-device">
        <li>
          <Link className="pages_item" to={"/"}>
            <span className="icon">
              <AiTwotoneHome />
            </span>{" "}
            {txt.header.home}
          </Link>
        </li>
        <li>
          <Link className="pages_item" to={"/about"}>
            <span className="icon">
              <FcAbout />
            </span>{" "}
            {txt.header.about}
          </Link>
        </li>
        <li>
          <Link className="pages_item" to={"/portfolio"}>
            <span className="icon">
              <FcOpenedFolder />
            </span>{" "}
            {txt.header.portfolio}
          </Link>
        </li>
        <li>
          <p
            className="pages_item"
            onClick={() => {
              console.log("onclick");
              dropdown ? setDropdown(false) : setDropdown(true);
            }}
          >
            <span className="icon">
              <LuLanguages />
            </span>
            {txt.header.changeLanguage}
          </p>
          {dropdown && (
            <select className="dropdown" onChange={(e) => {
              e.preventDefault()
              console.log(e.target.value)
              if(e.target.value == 'uzb'){
                setChangeLang(true)
              }else if(e.target.value == 'eng') {
                setChangeLang(false)
              }
              setDropdown(false)
            }}>
              <option value={'rus'}>o'zgartirish</option>
              <option value={'uzb'}>O'zbek</option>
              <option value={'eng'}>English</option>
            </select>
          )}
        </li>
      </ul>
      <div className="menu">
        <p className="burger">
          <RxHamburgerMenu
            onClick={() => {
              setShowMenu(true);
            }}
          />
        </p>
        {showMenu && (
          <div className="modal-backdrop">
            <div className="pages">
            <p className="close-menu">
              <CgClose
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </p>
            <ul className="pages-list">
              <li
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <Link className="pages_item" to={"/"}>
                  <span className="icon">
                    <AiTwotoneHome />
                  </span>{" "}
                  {txt.header.home}
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <Link className="pages_item" to={"/about"}>
                  <span className="icon">
                    <FcAbout />
                  </span>{" "}
                  {txt.header.about}
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <Link className="pages_item" to={"/portfolio"}>
                  <span className="icon">
                    <FcOpenedFolder />
                  </span>{" "}
                  {txt.header.portfolio}
                </Link>
              </li>
              <li>
                <div className="language-section">
                  <p
                    className="pages_item_lang"
                    onClick={() => {
                      dropdown ? setDropdown(false) : setDropdown(true);
                    }}
                  >
                    <span className="icon">
                      <LuLanguages />
                    </span>
                    {txt.header.changeLanguage}
                  </p>
                  {dropdown && (
                    <select className="dropdown-lang-sec" onChange={(e) => {
                      e.preventDefault()
                      console.log(e.target.value)
                      if(e.target.value == 'uzb'){
                        console.log('uzb change')
                        setChangeLang(true)
                      }else if(e.target.value == 'eng') {
                        console.log('eng change')
                        setChangeLang(false)
                      }
                      setDropdown(false)
                    }}>
                      <option value='rus'>o'zgartirish</option>
                      <option value='uzb'>O'zbek</option>
                      <option value='eng'>English</option>
                    </select>
                  )}
                </div>
              </li>
            </ul>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
