import React from 'react'
import Image from "next/image";

function Navbar() {
  return (
    <Image
      src="/menu-svgrepo-com.svg"
      alt="menu"
      width={30}
      height={30}
    />
  );
}

export default Navbar