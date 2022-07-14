import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import {getCategories} from "../services/index"
import navItems from "../data/navItems"

// import { useHistory, useLocation } from "react-router-dom";

function NavSidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);  

  
  
  return (
    <>
      <div
        className="navSidebar-bg"
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className="btn-menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Image src="/menu-svgrepo-com.svg" alt="menu" width={30} height={30} />
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <Navigation
          activeItemId={router.pathname}
          onSelect={({ itemId }) => {
            console.log({ itemId });
            {
              itemId !== "/category" && setIsSidebarOpen(false);
            }
            router.push(itemId);
          }}
          items={navItems(categories)}
        />
      </div>

      <style jsx>{`
        .navsidebar {
          z-index: 100;
        }
        .navSidebar-bg {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 20;
          display: ${isSidebarOpen ? "block" : "none"};
          background-color: black;
          opacity: 0.5;
        }
        .btn-menu {
          background-color: var(--color5);
          cursor: pointer;
          position: fixed;
          right: 10px;
          padding: 4px;
          padding-bottom: 0;
          border-radius: 4px;
        }
        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 30;
          width: 300px;
          transition: all 0.3s ease-in-out;
          transform: ${isSidebarOpen ? "none" : "translate(300px)"};
          background-color: white;
        }
        .test {
          position: relative;
          z-index: 50;
          background-color: white;
        }
      `}</style>
    </>
  );
}

export default NavSidebar;

