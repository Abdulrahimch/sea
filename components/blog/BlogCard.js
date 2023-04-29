import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import style from "../../src/styles/blog/blogCard.module.css";
const BlogCard = ({ cardNumber, cardImg, title, category }) => {
  return (
    <div key={cardNumber} className={style.cardContainer}>
      <h2 className={style.cardNumber}>/000{cardNumber}</h2>

      <Image className={style.cardImage} src={cardImg} alt="cardImg" />
      <div className={style.time}>
        <p>publish : 6th april 2023</p>
        <p>read time : 8 min</p>
      </div>
      <div className={style.cardBottom}>
        <h2 className={style.cardTitle}>
          {title}
          <span className={style.cardCategory}>{category}</span>
        </h2>
        <HiArrowUpRight
          style={{ stroke: "black", strokeWidth: "0.5" }}
          size={50}
        />
      </div>
    </div>
  );
};

export default BlogCard;
