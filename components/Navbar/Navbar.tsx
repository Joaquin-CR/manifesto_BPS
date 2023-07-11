'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [effect, setEffect] = useState(false);
  const [show, setShow] = useState(false);

  const content = (
    <div
      className={`${styles.navbarComponent} w-screen bg-bgColor-Navbar h-24`}
    >
      <div className="pl-8">
        {/*ANIMACION ${effect && styles.toggle-btn} */}
        <button
          id="hamburger-button"
          className={`text-3xl cursor-pointer`}
          onClick={() => {
            setEffect(effect ? false : true);
            setShow(show ? false : true);
          }}
        >
          <div className="bg-white w-8 h-1 rounded absolute top-14 -mt-0.5 transition-all duration-500 before:contect-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:contect-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
        </button>
      </div>
      <div className="grid place-items-center lg:ml-32 lg:place-items-start xl:place-items-start xl:ml-32">
        <div className="font-Modern mt-2 mb-2 text-center text-Color-M&BTN text-4xl w-8 h-8 xl:px-3 lg:px-3">
          M
        </div>
        <span
          className={`${styles.manifestoName} text-white text-center font-semibold text-xs w-14`}
        >
          Manifesto
        </span>
      </div>
    </div>
  );
  return content;
}
