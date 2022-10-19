import React, {useState, useEffect} from 'react'
import SwitchColor from '../components/SwitchColor'
import Logo from './Logo'
import RSHeader from './RSHeader'
import MediaQuery from "react-responsive";
import NavSidebar from "./NavSidebar";
import Navbar from './Navbar'


function Header() {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="header">
      <MediaQuery maxWidth={768}>
        <div className="header-container">
          <div className="container-top">
            <Logo />
            <NavSidebar />
          </div>
          <div className="amatic">Blog WebDev & LifeStyle</div>
          <RSHeader />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <div className="header-container">
          <div className="container-top">
            <Logo />
            <div className="RS-Theme-container">
              <RSHeader />
              <SwitchColor />
            </div>
          </div>
          <div className="amatic">Blog WebDev & LifeStyle</div>
        </div>
        <Navbar />
      </MediaQuery>

      <style jsx>{`
        .header {
          z-index: 5;
          position: relative;
        }
        .header-container {
          background-color: var(--color5);
        }
        .amatic {
          font-size: var(--font-size-xxxl);
          color: var(--main-bg-color);
          text-align: center;
          line-height: 100%;
          padding-bottom: 10px;
        }

        .container-top {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          align-items: flex-start;
        }
        .RS-Theme-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 30%;
          gap: 4px;
          min-width: 280px;
        }
      `}</style>
    </div>
  );
}

export default Header