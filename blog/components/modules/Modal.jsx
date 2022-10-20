import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Modal = ({ isShowing, hide, title, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" onClick={hide}></div>
          <div className="modal">
            <button type="button" className="modal-close-button" onClick={hide}>
              <Image
                src="/close_icon.svg"
                alt="close article"
                width={30}
                height={30}
              />
            </button>
            <div className="modal-header">
              <h4>{title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
          </div>
          <style jsx>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              z-index: 1040;
              backdrop-filter: blur(4px);
            }

            .modal {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 1050;
              width: 90%;
              max-width: 600px;
              border: solid 2px var(--foreground);
              background-color: var(--background);
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 10px;
            }
            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .modal-close-button {
              position: absolute;
              right: -15px;
              top: -15px;
              color: #000;
              cursor: pointer;
              border: solid 2px var(--color4);
              border-radius: 50%;
              padding: 0;
              height: 30px;
              width: 30px;
              background-color: var(--background);
            }
            .modal-body {
              width: 100%;
            }
          `}</style>
        </div>,
        document.body
      )
    : null;

export default Modal;
