import "./Modal.css";

import { CgClose } from "react-icons/cg";
import { AiOutlineLink } from "react-icons/ai";

function Modal({ link, setShowModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="device-modal">
          <div className="close">
            <CgClose
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <h2 className="link-icon">
            <AiOutlineLink />
          </h2>
          <p style={{ color: "blue", margin: 0 }}>{link}</p>
          <hr className="line" />
          <p className="modal-txt">Ushbu link orqali saytni korish</p>
          <a className="link_open_device" href={link}>
            Open
          </a>
        </div>
        <div className="mobile-modal">
          <a className="link_mobile" href={link}>
            Open
          </a>
          <button className="link_mobile link_mobile_back" 
              onClick={() => {
                setShowModal(false);
              }}
          >Back</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
