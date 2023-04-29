import card1 from "../../public/assets/product/card1.png";
import card2 from "../../public/assets/product/card2.png";
import card3 from "../../public/assets/product/card3.png";
import style from "../../src/styles/product/productCardContainer.module.css";
import ProductOverlay from "./ProductOverlay";
/* icons*/
import mousesquare from "../../public/assets/product/mousesquare.png";
import judge from "../../public/assets/product/judge.png";
import hands from "../../public/assets/product/hands.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css";
import ProductCard from "./ProductCard";
import ProductBigCard from "./ProductBigCard";
import { useState } from "react";
const ProductCardContainer = (props) => {
   // based on this state details of product is show as a overlay
  const [showOverlay, setShowOverlay] = useState(false);
  // this state set the overlay height
  const [OverlayHeight, setOverlayHeight] = useState(0);
  // this state set the product page height
  const [divHeight, setDivHeight] = useState(0);
  // when user click the read more button the this handler is fired and go to the top and set state to show and hide overlay
 
  const cardInfo = [
    {
      id: 0,
      img: card1,
      title: "Dispute resolution",
      category: "seaclub",
      icon: judge,
      cardType : 'small'
    },
    {
      id: 1,
      img: card2,
      title: "Smart contract escrow",
      category: "seaclub",
      icon: hands,
      cardType : 'big'
    },
    {
      id: 2,
      img: card3,
      title: "Seamless onboarding",
      category: "seaclub",
      icon: mousesquare,
      cardType : 'small'
    }
  ];
  const [swiper, setSwiper] = useState(null); //state for card slider
  const [activeNavigation, setactiveNavigation] = useState();
 
  return (
    <>
    <section className={style.CardFeatures}>
        {/* here user can see all product cards */}
        {cardInfo.map((card) => {
          if(card.cardType == 'big'){
            return(
              
              <div 
              className={style.test}
              onClick={()=>props.handleClick(card.id)}>
                <ProductBigCard
                  key={card.id}
                  cardNumber={card.id}
                  cardImg={card.img}
                  title={card.title}
                  category={card.category}
                  icon={card.icon}
                />
              </div>
            )
          }else{

            return(
              <div 
              className={style.test}
              onClick={()=>props.handleClick(card.id)}
              >
              <ProductCard
                key={card.id}
                cardNumber={card.id} 
                cardImg={card.img}
                title={card.title}
                category={card.category}
                icon={card.icon}
              />
            </div>
          )
            }
            })}
            
    <Swiper 
      className={style.mobileSwiper}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) =>setactiveNavigation(swiper.activeIndex) }
      onSwiper={(swiper) => console.log(swiper)}
    >
       {cardInfo.map((card) => {
            return(
              
      <SwiperSlide  >
        <div onClick={()=>props.handleClick(card.id)} 
              style={{marginLeft: '30px'}}>
                <ProductBigCard
                  key={card.id}
                  cardNumber={card.id}
                  cardImg={card.img}
                  title={card.title}
                  category={card.category}
                  icon={card.icon}
                  class_name='custom'
                />
                
              </div>
        </SwiperSlide>
              
            )
          
            })}
      ...
      
    </Swiper>
    </section>
    
    <div
    className={style.navigationContainer}>
        <div 
        className={` ${activeNavigation == 0 ? style.dotLong : style.dot}`}
        ></div>
        <div
        className={` ${activeNavigation == 1 ? style.dotLong : style.dot}`}></div>
        <div
        className={` ${activeNavigation == 2 ? style.dotLong : style.dot}`}></div>
    </div>
          </>
  );
};

export default ProductCardContainer;
