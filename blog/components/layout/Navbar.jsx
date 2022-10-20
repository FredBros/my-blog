import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getCategories } from "../../services/index";
import navItems from "../../data/navItems";
import NavDropdown from "../layout/NavDropdown";

function Navbar() {
  const [categories, setCategories] = useState([]);

  const navbarItems = navItems(categories);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  // Close dropdown when click outside menu
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <>
      <div className="navbar" ref={ref}>
        <ul className="navbar-list">
          {navbarItems.map((navItem, index) => (
            <li className="menu-items" key={index}>
              {navItem.subNav ? (
                <>
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                  >
                    {navItem.title}
                  </button>
                  <NavDropdown
                    submenus={navItem.subNav}
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                  />
                </>
              ) : (
                <Link href={navItem.itemId}>
                  <a> {navItem.title}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background-color: var(--background);
          border-bottom: solid 2px var(--color5);
        }
        .navbar-list {
          display: flex;
          justify-content: space-around;
          list-style: none outside none;
          margin: 0;
          padding: 20px;
        }
        .menu-items {
          font-family: "Bebas Neue";
        }
        button {
          color: inherit;
          font-size: inherit;
          border: none;
          background-color: transparent;
          cursor: pointer;
          width: 100%;
          padding: 0;
          text-align: left;
        }
      `}</style>
    </>
  );
}

export default Navbar;
