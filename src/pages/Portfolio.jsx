import "./Portfolio.css";
import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../components/Contex";

import Modal from "./Modal";

function Portfolio() {
  const obj = useContext(ThemeContext);
  const txt = obj.changeLang ? obj.uzb : obj.eng;
  console.log(txt);

  const [showModal, setShowModal] = useState(false);
  const [propsLink, setPropsLink] = useState(null);
  const [portfolio, setPortfolio] = useState([
    {
      img: "./music.jpg",
      mbimg: "./mb-music.jpg",
      link: "https://mmusic-player.netlify.app/",
      github: "",
      id: 7,
    },
    {
      img: "./randomUser.jpg",
      mbimg: "./mb-randomUser.jpg",
      link: "https://aa-random-user.netlify.app/",
      github: "",
      id: 6,
    },
    // {
    //   img: "./bookuz.jpg",
    //   mbimg: "./bookuz.jpg",
    //   link: "https://a-book-shop.netlify.app/",
    //   github: "",
    //   id: 2,
    // },
    {
      img: "./weather.jpg",
      mbimg: "./mb-weather.jpg",
      link: "https://aa-the-weather.netlify.app/",
      github: "",
      id: 7,
    },
    {
      img: "./infoWords.jpg",
      mbimg: "./mb-infoWords.jpg",
      link: "https://words-info.netlify.app/",
      github: "",
      id: 8,
    },
    {
      img: "./countries.jpg",
      mbimg: "./mb-countries.jpg",
      link: "https://countries-info-at-react.netlify.app/",
      github: "https://github.com/ahmedofweb/countries-info-at-React",
      id: 3,
    },
    {
      img: "./todo.jpg",
      mbimg: "./mb-todo.jpg",
      link: "https://1react-to-do.netlify.app/",
      github: "",
      id: 9,
    },
  ]);

  return (
    <div className="portfolio">
      <h1 className='prt-title'>{txt.portfolio.title}</h1>
    <p className='prt-text'>{txt.portfolio.text}</p>
     {showModal &&
            <Modal  setShowModal={setShowModal} link={propsLink}/>
      }
     { portfolio.map((site) => {
    return(
      <div className='site' key={site.id}>
        <img className="site-img" src={site.img} alt="" onClick={() => {
          setShowModal(true) 
          setPropsLink(site.link)
        }} />
        <img className='mb-img' src={site.mbimg} alt="" onClick={() => {
          setShowModal(true) 
          setPropsLink(site.link)
        }} />
      </div>
    )
  })}
         
    </div>
  );
}

export default Portfolio;
