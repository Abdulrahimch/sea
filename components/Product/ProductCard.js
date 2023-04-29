import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

import style from "../../src/styles/product/productCrad.module.css";
import loading from "../../public/assets/product/loading.png";
const ProductCard = ({ cardNumber, cardImg, title, category, icon}) => {
  return (
    <>
    <div key={cardNumber} className={style.cardContainer}>
      <div className={style.cardImgContainer}>

      <Image className={style.cardImage } src={cardImg} alt="cardImg" />
      </div>
      <div className={style.feature1}>
        <Image src={icon} className={style.cardIcon }  alt="cardImg" />
                 <span className={style.feature1_span}>{title}</span>
      </div>
      
      <div className={style.cardBottom}>
        <div className={style.cardNavigationItem}>
          <Image src={loading} className={style.cardNavigationItem}  alt="cardImg" />
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductCard;
