import React from "react";
import Image from "next/image";
import Link from "next/link";
import useModal from "../../utils/useModal";
import Modal from "../utils/Modal";
import ShareModal from "../ui/ShareModal";
import Sharebutton from "../ui/Sharebutton";

function RSHeader() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className="container">
        <Link href="https://www.linkedin.com/in/fred-brossard-073358206">
          <a target="_blank">
            <Image
              src="/iconmonstr-linkedin-3.svg"
              alt="flip-flap"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="https://github.com/FredBros">
          <a target="_blank">
            <Image
              src="/github-svgrepo-com.svg"
              alt="gihub"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank">
            <Image
              src="/twitter-svgrepo-com.svg"
              alt="twitter"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <div className="share-container">
          <Sharebutton />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        a {
          height: 30px;
        }
        .share-container {
          margin: 0 10px;
        }
      `}</style>
    </>
  );
}

export default RSHeader;
