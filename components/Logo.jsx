import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="logo">
      <Image src="/tongs.svg" alt="flip-flap" width={100} height={100} />

      <div className="amatic">Tranquil Fred</div>
      <style jsx>{`
        .logo {
          display: flex;
        }
        .amatic {
          padding-left: 20px;
          font-size: 32px;
          color: var(--main-bg-color);
        }
        @media screen and (min-width: 576px) {
          .amatic {font-size: 48px;}
        }
      `}</style>
    </div>
  );
}

export default Logo;
