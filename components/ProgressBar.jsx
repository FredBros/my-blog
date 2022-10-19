import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useReadingProgress } from "../utils/useReadingProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ div }) {
  const completion = useReadingProgress(div);

  

  return (
    <>
      <Link href="/">
        <div className="progress-bar">
          <CircularProgressbar
            value={completion}
            maxValue={100}
            background={true}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: "var(--color4)",
              backgroundColor: "var(--background)",
            })}
          />
          <div className="close-icon">
            <Image
              src="/close_icon.svg"
              alt="close article"
              width={30}
              height={30}
            />
          </div>
        </div>
      </Link>
      <style jsx>{`
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 4;
          height: 40px;
          width: 40px;
          margin: 10px;
          cursor: pointer;
        }
        .progress-bar:hover {
          transform: scale(1.2, 1.2);
          transition: transform 0.1s ease-in-out;
        }
        .close-icon {
          position: absolute;
          top: 0;
          left: 0;
          padding: 5px;
        }
      `}</style>
    </>
  );
}

export default ProgressBar;
