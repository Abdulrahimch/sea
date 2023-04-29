import Image from "next/image";
import style from "../../src/styles/blog/blogHero.module.css";
import bitcoin1 from "../../public/assets/blog/bitcoin1.jpeg";
import { HiArrowUpRight } from "react-icons/hi2";
const BlogHero = ({ handleClick }) => {
  return (
    // hero part of blog page
    <section className={style.container}>
      {/* show half part of a blog and when user click on readMore button then user can see a overlay of details blog */}
      <div className={style.topBlogContainer}>
        <div className={style.imgContainer}>
          <Image className={style.heroImage} src={bitcoin1} alt="bitcoin1" />
          <div className={style.imgNumber}>
            <p>/ 0004</p>
          </div>
        </div>
        <div>
          <h1 className={style.topBlogTitle}>
            The greatest advantages of using web3
          </h1>
          <p className={style.dateStyle}>APRIL 6, 2023 | 8 MIN</p>
          <p className={style.shortDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula eros viverra velit aliquam scelerisque. Etiam mollis diam
            odio, vel cursus ex efficitur eu. Fusce consequat pharetra elit
            vitae aliquam.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula eros viverra velit aliquam scelerisque. Etiam mollis diam
            odio, vel cursus ex efficitur eu. Fusce consequat pharetra elit
            vitae aliquam.{" "}
          </p>
          <h6 className={style.readMore} onClick={handleClick}>
            Read More{" "}
            <HiArrowUpRight className={style.readMoreIcon} size={20} />
          </h6>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
