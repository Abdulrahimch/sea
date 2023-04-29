import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

import hands from "../../public/assets/product/hands.png";
import loading from "../../public/assets/product/loading.png";
import style from "../../src/styles/product/productCrad.module.css";
const ProductCard = ({ cardNumber, cardImg, title, category, icon,class_name }) => {
  return (
    <div key={cardNumber} className={style.cardBigContainer}>
       <div className={style.cardImgContainer}>
          <Image className={style.cardImageCustom}  src={cardImg} alt="cardImg" />
        </div>
        <div className={style.feature1}>
          <Image src={icon} className={style.cardIcon}  alt="cardImg" />
                 <span className={style.feature1_span}>{title}</span>
        </div>
      <div className={style.BigCardNavigationItem}>
      <Image src={loading} className={style.cardNavigationItemimg}  alt="cardImg" />
      </div>
      
    </div>
  );
};

export default ProductCard;
