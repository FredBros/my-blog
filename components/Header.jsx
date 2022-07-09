import React, {useState, useEffect} from 'react'
import SwitchColor from '../components/SwitchColor'
import Logo from './Logo'
import RSHeader from './RSHeader'
import MediaQuery from "react-responsive";
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
            <Navbar />
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
        .header-container {
          background-color: var(--color5);
        }
        .amatic {
          font-size: 40px;
          color: var(--main-bg-color);
          text-align: center;
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
          align-items: top;
          width: 30%;
          gap: 4px;
        }
        @media screen and (min-width: 576px) {
          .amatic {
            font-size: 96px;
          }
        }
        @media screen and (min-width: 768px) {
        }
      `}</style>
    </div>
  );
}

export default Header