import Image from "next/image";
import style from "../../src/styles/product/smallCard.module.css";
const SmallCard = ({ img, title }) => {
  return (
    <div className={style.smallCardOuter} key={title}>
      <Image src={img} className={style.smallCardImg} alt="small card image" />
      <h3 className={style.smallCardTitle}>{title}</h3>
    </div>
  );
};

export default SmallCard;
