import Image from "next/image";
import style from "../src/styles/Navbar.module.css";
import logo from "../public/assets/Seaclub_Logotype_BLK_RGB.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={style.navContainer}>
      {/* this is hamburger */}
      <div>
        <Image src={logo} alt="seaclub logo" className={style.logo} />

        <p className={`${style.menu} ${showMenu && style.active}`}>MENU</p>

        <div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={style.hamburgerCircle}
          >
            <div className={style.hamburgerLineContainer}>
              <motion.div
                initial={{ rotate: 0, y: 0 }}
                animate={showMenu ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className={style.hamburgerLine}
              ></motion.div>
              <motion.div
                initial={{ rotate: 0, y: 0 }}
                animate={
                  showMenu ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.5 }}
                className={style.hamburgerLine}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* all hamburger menu items is here */}
      <ul className={`${style.menuContainer} ${showMenu && style.active}`}>
        <Link href="/">
          <li>
            HOME <BsArrowRight className={style.icon} />
          </li>
        </Link>
        <Link href="/about-us">
          <li>
            ABOUT <BsArrowRight className={style.icon} />
          </li>
        </Link>
        <Link href="product">
          <li>
            PRODUCT <BsArrowRight className={style.icon} />
          </li>
        </Link>
        <Link href="blog">
          <li>
            BLOG <BsArrowRight className={style.icon} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
