import './Modal.css'

import { CgClose } from 'react-icons/cg'

function Modal({link, setShowModal}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
             <div className='close'><CgClose onClick={() => {setShowModal(false)}}/></div>
             <p style={{color: 'blue' , margin: 0}}>{link}</p>
             <hr className='line' />
             <p className='modal-txt'>Ushbu link orqali saytni korish</p>
             <a href={link}>Tasdiqlash</a>
        </div>
    </div>
  )
}

export default Modal