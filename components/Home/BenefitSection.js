import { useState } from "react";
import rightArrowIcon from "../../public/assets/rightArrowIcon.png";
import leftArrowIcon from "../../public/assets/leftArrowIcon.png";
import style from "../../src/styles/Home/BenefitSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
const BenefitSection = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Enhanced security",
      des: "Protect your transactions with our secure smart contract escrow, ensuring a risk-free experience when working with service providers online",
    },
    {
      id: 2,
      title: "Transparent work history",
      des: "Gain trust with our blockchain-based advanced review system, eliminating fake reviews and providing a detailed track record for all users.",
    },
    {
      id: 3,
      title: "Work smarter, not harder",
      des: " AI-driven technologies and a transparent ecosystem to streamline processes, empowering users to achieve greater efficiency and success within the Web3 landscape.",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  // this handler will show the next benefit card
  const nextTo = () => {
    swiper.slideNext();
  };
  // this handler will show the previous benefit card
  const prevTo = () => {
    swiper.slidePrev();
  };
  return (
    // this is benefit section
    <section className={style.container}>
      <div>
        <div className={style.containerItem}>
          <p className={style.benefitTitle}>Benefits</p>
          <div className={style.middleParagraph}>
            <p className={style.slashStyle}>/</p>
            <p className={style.textStyle}>
              Unlock the SeaClub® advantage – a thriving ecosystem tailored for
              success, enhanced collaboration, and access to the latest
              technology advancements.
            </p>
            {/* this is button for see the benefit. all benefit card move in x axis */}
            <div className={style.btnsContainer}>
              <div className={style.arrowButton} onClick={prevTo}>
                <Image src={leftArrowIcon} alt="left" />
              </div>
              <div className={style.arrowButton} onClick={nextTo}>
                <Image src={rightArrowIcon} alt="right" />
              </div>
            </div>
          </div>
        </div>
        {/* this section shows all benefit card in slider. for slider i use Swiper.js  */}
        <div className={style.benefitContainer}>
          <Swiper
            slidesPerView={1.1}
            spaceBetween={13}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1000: {
                slidesPerView: 2.5,
              },
            }}
            modules={[Pagination]}
            onSwiper={(s) => {
              console.log("initialize swiper", s);
              setSwiper(s);
            }}
          >
            {cardInfo.map((card) => (
              <SwiperSlide key={card.id}>
                <div className={style.benefitBox}>
                  <h1 className={style.benefitHeader}>0{card.id}</h1>
                  <div className={style.benefitTextStyle}>
                    <h1>{card.title}</h1>
                    <p>{card.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
