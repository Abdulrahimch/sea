import Image from "next/image";
import style from "../../src/styles/Home/LastSection.module.css";
import footerImage from "../../public/assets/footerImgHiRez.jpg";
const LastSection = () => {
  return (
    // this is the footer section of landing page
    <section className={style.container}>
      <div className={style.marketplaceText}>
        <p>/ 0002</p>
        <p>
          THE <br /> MARKETPLACE
          <br /> FOR WEB3
          <br /> PROS
        </p>
      </div>
      <div className={style.middlePart}>
        <h1>We believe in the power of community to drive innovation</h1>
        <div className={style.smallText}>
          <div className={style.text}>
            <p>
              At Seaclub®, we believe in the power of community to drive
              innovation and progress in the Web3 space. Through
              decentralization, we create a collaborative space, empowering a
              thriving ecosystem for groundbreaking solutions.
            </p>
            <button className="btn">Register Now</button>
          </div>
          <div className={style.imageContainer}>
            <Image
              src={footerImage}
              className={style.image}
              alt="footer Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
