import React from 'react'
import Image from "next/image";
import useModal from "../../utils/useModal";
import ShareModal from "./ShareModal"
import Modal from "../modules/Modal"

function Sharebutton() {

  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className="share-container" onClick={toggle}>
        <Image src="/share.svg" alt="partager" width={30} height={30} />
      </div>

      <Modal isShowing={isShowing} hide={toggle} title="Partager">
        <ShareModal />
      </Modal>
      <style jsx>{`
        .share-container {
          background-color: var(--color5);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          height: 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

export default Sharebutton

