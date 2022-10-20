import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogTitle } from "../../services";

function Logo() {
  const [blogTitle, setBlogTitle] = useState();
  useEffect(() => {
    getBlogTitle().then((data) => setBlogTitle(data));
  }, []);

  return (
    <Link href={`/`}>
      <div className="logo">
        <Image src="/tongs.svg" alt="flip-flap" width={100} height={100} />

        <div className="amatic">{blogTitle}</div>
        <style jsx>{`
          .logo {
            display: flex;
            cursor: pointer;
          }
          .amatic {
            padding-left: 20px;
            font-size: var(--font-size-xxl);
            color: var(--main-bg-color);
          }
          @media screen and (min-width: 576px) {
            .amatic {
              font-size: 48px;
            }
          }
        `}</style>
      </div>
    </Link>
  );
}

export default Logo;
