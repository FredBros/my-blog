import React from 'react'
import Image from "next/image";
import Link from "next/link";


function RSHeader() {

  return (
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
            alt="flip-flap"
            width={30}
            height={30}
          />
        </a>
      </Link>
      <Link href="/">
        <a target="_blank">
          <Image
            src="/twitter-svgrepo-com.svg"
            alt="flip-flap"
            width={30}
            height={30}
          />
        </a>
      </Link>

      <style jsx>{`
        .container {
          display: flex;
          gap: 4px;
        }
      `}</style>
    </div>
  );
}

export default RSHeader