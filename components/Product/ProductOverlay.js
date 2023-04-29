import Image from "next/image";
import style from "../../src/styles/product/productOverlay.module.css";
import image from "../../public/assets/blog/bitcoin1.jpeg";
import card1 from "../../public/assets/blog/card1.jpeg";
import card2 from "../../public/assets/blog/card2.jpeg";
import arrowBack from "../../public/assets/blog/blogArrowRightWhite.png";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import SmallCard from "./SmallCard";
const ProductOverlay = ({ showOverlay, setOverlayHeight, setShowOverlay }) => {
  // set the overlay hight
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.offsetHeight;
      setOverlayHeight(divHeight);
    }
  }, []);
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
  ];
  return (
    // this is overlay container
    <section
      ref={divRef}
      className={`${style.overlayContainer} ${showOverlay ? style.active : ""}`}
    >
      <div className={style.ImageContainer}>
        <Image className={style.detailsImage} src={image} alt="blog image" />
        <div className={style.ProductNumber}>
          <p>/ 0004</p>
        </div>
        <h1 className={style.title}>The greatest advantages of using web3</h1>
        <p className={style.time}>APRIL 6, 2023 | 8 MIN</p>
        <div className={style.details}>
          <p className={style.firstText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            fugiat, est voluptate possimus impedit temporibus sequi quidem
            dolores, aut debitis atque facilis. Doloremque vitae corporis quos
            nihil et quas consequuntur ad adipisci tenetur, a, eum omnis cumque
            exercitationem. Qui ipsum optio debitis? Iusto, dolorem consectetur
            fugit sed nihil exercitationem veritatis ea est quod. Possimus odio
            sunt eius, rerum aperiam ex id laborum molestias explicabo quaerat
            harum error enim accusamus porro. Reiciendis adipisci sed recusandae
            nisi aliquid. Pariatur repudiandae labore, incidunt magni quod sint
            non fugit sunt in rerum earum velit fugiat ut explicabo libero,
            eveniet ipsa adipisci cum ratione provident.
          </p>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae.
            </p>
          </div>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae.
            </p>
          </div>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae.
            </p>
          </div>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae.
            </p>
          </div>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae.
            </p>
          </div>
          <div className={style.paragraph}>
            <h2>Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi dignissimos natus eaque quidem fuga ab, totam tempore
              magni sint adipisci itaque aliquid debitis sed reprehenderit
              ducimus, nostrum doloribus dolores laborum corporis. Accusamus
              eligendi vitae nemo magni reiciendis quis, voluptates, distinctio
              aut, ipsam fugiat mollitia aliquid commodi dolorem ea adipisci!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dolorem eligendi qui error, placeat nihil quasi molestias
              dignissimos, laborum repellendus sed debitis impedit illo et quod
              vitae architecto aut culpa in sequi ipsa ipsum? Nihil, dolore quis
              consequuntur laudantium cumque, quibusdam labore sunt eius laborum
              porro provident. Id, laboriosam recusandae. hello
            </p>
          </div>
          {/* when user click on 'bact to blog' then the overlay is gone and user can see the blog page  */}
          <div
            onClick={() => {
              setShowOverlay(false),
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={style.backContainer}
          >
            <div className={style.btnContainer}>
              <Image
                className={style.arrowImage}
                src={arrowBack}
                alt="back button"
              />
            </div>
            <h4>Back to blog</h4>
          </div>
          {/* here user can see some card related to this blog  */}
          <div className={style.articleContainer}>
            <h6>Related articles</h6>
            <div className={style.articleCard}>
              {cardInfo.map((card) => (
                <ProductCard
                  cardNumber={card.id}
                  cardImg={card.img}
                  title={card.title}
                  category={card.category}
                />
              ))}
            </div>
          </div>
          <div className={style.smallCardContainer}>
            {cardInfo.slice(1).map((card) => (
              <SmallCard img={card.img} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverlay;
