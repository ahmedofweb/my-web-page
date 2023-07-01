import './Portfolio.css' 
import { useState } from 'react'

import Modal from './Modal'

function Portfolio() {
  const [showModal , setShowModal] = useState(false)
  const [propsLink, setPropsLink] = useState(null)
  const [portfolio, setPortfolio] = useState([
    {
        img: './bookuz.jpg',
        link: '',
        id: 2
    },
    {
        img: './countries.jpg',
        link: 'https://countries-info-at-react.netlify.app/',
        github: 'https://github.com/ahmedofweb/countries-info-at-React',
        id: 3
    },
    {
        img: './wordsplay.jpg',
        link: 'https://ia-game.netlify.app/',
        github:'',
        id: 4
    }, 
    {
      img: './cuser.jpg',
      link: 'http://createusers1.netlify.app/',
      github: 'https://github.com/ahmedofweb/CreateUser',
      id: 1
    }
])


return(
  <div className='portfolio'>
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
      </div>
    )
  })}
  </div>
)
}

export default Portfolio