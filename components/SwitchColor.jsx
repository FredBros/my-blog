import React from "react";
import { useTheme } from "next-themes";


function SwitchColor() {
    const { theme, setTheme } = useTheme();
    const toggleTheme =(e) =>{
        if (e.target.checked) {
           setTheme("dark")
        } else {
           setTheme("light"); 
        }
    }

  return (
    <div className="toggle-theme-wrapper">
      <img src="/Sun.svg" alt="Light" />
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
        <div className="slider"></div>
      </label>
      <img src="/Moon.svg" alt="Dark" />

      <style jsx>{`
        .toggle-theme-wrapper {
          display: flex;          
          align-items: center;
          gap: 4px;
          width: 110px;
          height: 30px;
        }

        .toggle-theme-wrapper span {
          font-size: 28px;
        }

        .toggle-theme {
          position: relative;
          display: inline-block;
          height: 30px;
          width: 46px;
        }

        .toggle-theme input {
          display: none;
        }

        .slider {
          background-color: var(--main-bg-color);
          position: absolute;
          cursor: pointer;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          transition: 0.2s;
          border-radius: 16px;
          
        }

        .slider:before {
          background-color: var(--color5);
          bottom: 2px;
          content: "";
          height: 26px;
          left: 4px;
          position: absolute;
          transition: 0.4s;
          width: 26px;
          border-radius: 50%;
        }

        input:checked + .slider:before {
          transform: translateX(12px);
        }

         {
          /* input:checked + .slider {
          background-color: cornflowerblue;
        } */
        }
      `}</style>
    </div>
  );
}

export default SwitchColor;
