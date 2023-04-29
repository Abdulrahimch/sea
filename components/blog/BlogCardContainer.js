import card1 from "../../public/assets/blog/card1.jpeg";
import card2 from "../../public/assets/blog/card2.jpeg";
import card3 from "../../public/assets/blog/card3.jpeg";
import style from "../../src/styles/blog/blogCardContainer.module.css";
import leftArrowIconBlack from "../../public/assets/blog/blogArrowLeftBlack.png";
import rightArrowIconWhite from "../../public/assets/blog/blogArrowRightWhite.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import BlogCard from "./BlogCard";
import { useState } from "react";
import Image from "next/image";
import SmallCard from "./SmallCard";
import { motion } from "framer-motion";
const BlogCardContainer = () => {
  const cardInfo = [
    {
      id: 1,
      img: card1,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 2,
      img: card2,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 3,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 4,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 5,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 6,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 7,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 8,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
    {
      id: 9,
      img: card3,
      title: "The greatest advantages of using web3",
      category: "seaclub",
    },
  ];
  const [swiper, setSwiper] = useState(null); //state for card slider
  const [progressValue, setProgressValue] = useState(2.5); // state for maintain value of progress bar
  const [btnAnimation, setBtnAnimation] = useState(false); // state for button animation

  const nextTo = () => {
    if (!btnAnimation) {
      swiper.slideNext(); // first time clicking the next button set slide next
      setProgressValue(progressValue + 1); // increases 1 for the first time click the next button
    } else {
      swiper.slidePrev(); // second time click the button set slider preview
      if (progressValue === cardInfo.length) {
        setProgressValue(progressValue - 0.5); // decrease progress bar value 0.5 if it reach its max.
      } else if (progressValue > 2.5) {
        setProgressValue(progressValue - 1); // decrease progress bar value if its grater then its initial value
      }
    }
    setBtnAnimation(!btnAnimation); // toggle the btnAnimation state
  };

  const prevTo = () => {
    if (btnAnimation) {
      swiper.slideNext(); // after animating the button slide previous button become the slide next button
      if (progressValue <= cardInfo.length) {
        setProgressValue(progressValue + 1); // and increase the value of progress bar if its not reach its max value
      }
    } else {
      swiper.slidePrev(); // if btnAnimation is false then its works as a previous button of slider
      if (progressValue === cardInfo.length) {
        setProgressValue(progressValue - 0.5); // and decrease the value of progress bar 0.5 if its reach its max.
      } else if (progressValue > 2.5) {
        setProgressValue(progressValue - 1); // decrease progress bar value if its grater then its initial value
      }
    }
  };
  return (
    <section className={style.blogCardContainer}>
      <div className={style.BigScreenCard}>
        <div className={style.headText}>
          <h1>Seaclub</h1>
          <p>
            announcements, <br />
            update,
            <br /> features,
            <br /> success stories
          </p>
        </div>

        {/* here user can see all blog card */}
        <div style={{ height: "100%", width: "86vw" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={60}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
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
                <BlogCard
                  cardNumber={card.id}
                  cardImg={card.img}
                  title={card.title}
                  category={card.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.bottomPart}>
          <div className={style.buttonContainer}>
            <motion.div
              initial={{ rotate: 0, x: 0 }}
              animate={
                btnAnimation ? { rotate: 180, x: 65 } : { rotate: 0, x: 0 }
              }
              transition={{ duration: 0.3 }}
              className={style.buttonLeft}
              onClick={prevTo}
            >
              <Image src={leftArrowIconBlack} alt="left" />
            </motion.div>
            <motion.div
              initial={{ rotateY: 0, x: 0 }}
              animate={
                btnAnimation ? { rotateY: 180, x: -65 } : { rotateY: 0, x: 0 }
              }
              transition={{ duration: 0.3 }}
              className={style.buttonRight}
              onClick={nextTo}
            >
              <Image src={rightArrowIconWhite} alt="left" />
            </motion.div>
          </div>
          <progress id="file" value={progressValue} max={cardInfo.length} />
        </div>
      </div>
      <div className={style.smallScreenCard}>
        <h3 className={style.smallCardHeader}>Previous articles</h3>
        {cardInfo.map((card) => (
          <SmallCard img={card.img} title={card.title} />
        ))}
        <div className={style.btnStyle}>
          <p>Explore more</p>
        </div>
      </div>
    </section>
  );
};

export default BlogCardContainer;
