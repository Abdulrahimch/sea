import style from "../../src/styles/Home/HeroStyle.module.css";
import brandLogo from "../../public/assets/Seaclub_Symbol_BLK_RGB.svg";
import Image from "next/image";
const Hero = () => {
  return (
    // this is hero part of landing page
    <section className={style.container}>
      <h1 className={style.title}>
        Sail away to work freedom <br /> with Seaclub<sup>&#174;</sup>
      </h1>
      <div className={style.infoContainer}>
        <div className={style.btnContainer}>
          <p>
            SEACLUB<sup>&#174;</sup>
          </p>
          <button className="btn">Register Now</button>
        </div>
        <div className={style.info}>
          <p className={style.subtitle}>
            THE <br /> MARKETPLACE FOR WEB3 <br /> PROS
          </p>
          <p>SEACLUB.IO</p>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image src={brandLogo} alt="brand logo" className={style.brandLogo} />
      </div>
      <div className={style.lastInfo}>
        <p>&copy;2023</p>
        <p>/ 0001</p>
      </div>
    </section>
  );
};
export default Hero;
