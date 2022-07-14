import React from 'react'
import Link from "next/link";

const NavDropdown = ({ submenus, dropdown }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link href={submenu.itemId}>
            <a> {submenu.title}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        .dropdown {
          list-style: none outside none;
          padding: 0;
          position: absolute;
          z-index: 100;
          border-radius: 3px;
          border: solid 1px var(--color5);
          background-color: var(--background);
          display : ${dropdown ? "block" : "none"}
        }
        .menu-items {
          padding: 5px;
        }
      `}</style>
    </ul>
  );
};

export default NavDropdown