import { useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import Image from "next/image";
import ProductCardContainer from "../../../components/Product/ProductCardContainer";
import ProductHero from "../../../components/Product/ProductHero";
import ProductSidebar from "../../../components/Product/ProductSidebar";
import style from "../../styles/product/product.module.css";
import Frame_logo from '../../../public/assets/product/Frame_logo.png';
import Backtotop from '../../../public/assets/product/Backtotop.png';
import blogArrowLeftBlack from '../../../public/assets/product/blogArrowLeftBlack.png';

const Product = () => {
  // based on this state details of product is show as a overlay
  const [showOverlay, setShowOverlay] = useState(false);
  // this state set the overlay height
  const [OverlayHeight, setOverlayHeight] = useState(0);
  // this state set the product page height
  const [divHeight, setDivHeight] = useState(0);
  // when user click the read more button the this handler is fired and go to the top and set state to show and hide overlay
 
  // when click to a specific product to show it's overlay container
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  
  const [show2, setShow2] = useState(false);
  const handleClick = (id_overlay) => {
    console.log('clicked111',id_overlay)
    if(id_overlay == 0){
      setShow(true);
    }
    if(id_overlay == 1){
      setShow1(true);
    }
    if(id_overlay == 2){
      setShow2(true);
    }   
    if(id_overlay == -1){
      console.log(show1)
      console.log(show)
      console.log(show2)
      setShow(false);
      setShow1(false);
      setShow2(false);
    }
  }
  // set the Product page hight to the state
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.offsetHeight;
      setDivHeight(divHeight);
    }
  }, [show1,show,show2]);
  // calculate the padding of Product page dynamically
  let bottomPadding = OverlayHeight - divHeight;
  return (
    <Layout>
      <section className={style.productContainer} >
        {/* set padding for show the hole overlay page */}
        <section
          style={{
            paddingBottom: `${showOverlay ? bottomPadding : 0}px`,
          }}
          className={style.mainContent}
         
        >
          <div className={style.topText}>
            <div className={style.topTextH1Container}>
              <h1 className={style.topTextH1}>Decentralized Collaboration</h1>
            </div>
            <div className={style.topTextPContainer}>
               <p className={style.topTextP}>
                The <br className={style.topTextbr1}/> 
                key to <br />unlocking <br className={style.topTextbr1}/>the future<br className={style.topTextbr1}/> of work
              </p>
            </div>
          </div>
          
          <div ref={divRef} className={style.cardsContainer}>
            {/* this is all container fro product page */}
              <ProductCardContainer handleClick={handleClick} />
            {/* this is overlay page  */}
            <div style={{ color: "white" }} className={` ${show ? style.productOverlayContainershow : style.productOverlayContainer}`}> 
              <div className={style.productOverlayheader} id="headerOverlay">
                <h1 className={style.productOverlayheaderH1}>Dispute resolution</h1>
                <h1 className={style.productOverlayheaderH1Back}  onClick={()=>handleClick(-1)}>
                <span>
                    <Image src={blogArrowLeftBlack} 
                      alt="blogArrowLeftBlack"  />
                  </span>  
                  Go Back
                </h1>
              </div>
              <div className={style.productOverlayparagraphe}>
                <h1 className={style.productOverlayparagrapheh1}>/</h1>
                <p className={style.productOverlayparagraphep}> 
                A decentralized voting mechanism to resolve conflicts and distribute funds fairly.
                 </p>
              </div>
              <div className={style.productOverlayparagraphe2} >
                <div className={style.productOverlayparagraphe2ImageContainer}>
                  <Image 
                    src={Frame_logo}  
                    alt="Frame_logo"  
                    className={style.productOverlayparagraphe2ImageContainerImg}/>
                </div>
                <div className={style.productOverlayparagraphe2pContainer}>
                  <p className={style.productOverlayparagraphe2p}>
                  By harnessing the power of Web3 technology, we provide a secure, transparent, and efficient ecosystem for both service providers and clients.
                   </p>
                </div> 
              </div>
              <div className={style.productOverlayparagraphe3}>
                <div className={style.productOverlayparagraphe3TitleContainer}>
                  <h1 className={style.productOverlayparagraphe3H1}>
                  Join the Seaclub® Beta and Shape the Future of Work
                  </h1>
                  <div className={style.productOverlayheaderpContainer}>
                    <p >
                      This is your opportunity to make an impact and shape the future of work.
                    </p>
                  </div>
                </div>
                <div className={style.productOverlayparagraphe3pContainer}>
                  
                <div  className={style.productOverlayImage3Container}>
                  <a href="#headerOverlay">
                  <Image src={Backtotop}  alt="cardImg" />

                  </a>
                </div>
                  <p className={style.productOverlayparagraphe3p}>
                  Don't miss your chance to be at the forefront of a game-changing platform that's revolutionizing the way experts and businesses collaborate. 

                   </p>
                   <p className={style.productOverlayparagraphe3p}>
                    
                      By becoming a Seaclub®  beta user, you'll have exclusive early access to our cutting-edge decentralized ecosystem, where you can connect, collaborate, and grow in a secure and transparent environment.
                   </p>
                   <button className={style.productOverlayparagraphe3btn}>Register now</button>
                </div> 
               
              </div>
            </div>
            <div style={{ color: "white" }} className={` ${show2 ? style.productOverlayContainershow : style.productOverlayContainer}`}> 
              <div className={style.productOverlayheader} id="headerOverlay2">
                <h1 className={style.productOverlayheaderH1}>Seamless onboarding</h1>
                <h1 className={style.productOverlayheaderH1Back}  onClick={()=>handleClick(-1)}>
                <span>
                    <Image src={blogArrowLeftBlack} 
                      alt="blogArrowLeftBlack"  />
                  </span> 
                  Go Back
                </h1>
              </div>
              <div className={style.productOverlayparagraphe}>
                <h1 className={style.productOverlayparagrapheh1}>/</h1>
                <p className={style.productOverlayparagraphep}> 
                  Start and navigate the Seaclub® 
                  ecosystem with its user-friendly interface, 
                  automatic profile syncing, and personalization features.
                </p>
              </div>
              <div className={style.productOverlayparagraphe2} >
                <div className={style.productOverlayparagraphe2ImageContainer}>
                  <Image 
                    src={Frame_logo}  
                    alt="cardImg" 
                    className={style.productOverlayparagraphe2ImageContainerImg}/>
                </div>
                <div className={style.productOverlayparagraphe2pContainer}>
                  <p className={style.productOverlayparagraphe2p}>
                    With Seaclub, we aim to eliminate traditional 
                    barriers, reduce high fees, and foster a thriving 
                    community that empowers the future of work.
                  </p>
                </div> 
              </div>
              <div className={style.productOverlayparagraphe3}>
                <div className={style.productOverlayparagraphe3TitleContainer}>
                  <h1 className={style.productOverlayparagraphe3H1}>
                  Join the Seaclub® Beta and Shape the Future of Work
                  </h1>
                  <div className={style.productOverlayheaderpContainer}>
                    <p >
                      This is your opportunity to make an impact and shape the future of work.
                    </p>
                  </div>
                </div>
                <div className={style.productOverlayparagraphe3pContainer}>
                  
                <div  className={style.productOverlayImage3Container}>
                  <a href="#headerOverlay2">
                  <Image src={Backtotop}  alt="cardImg" />

                  </a>
                </div>
                  <p className={style.productOverlayparagraphe3p}>
                  Don't miss your chance to be at the forefront of a game-changing platform that's revolutionizing the way experts and businesses collaborate. 

                   </p>
                   <p className={style.productOverlayparagraphe3p}>
                    
                      By becoming a Seaclub®  beta user, you'll have exclusive early access to our cutting-edge decentralized ecosystem, where you can connect, collaborate, and grow in a secure and transparent environment.
                   </p>
                   <button className={style.productOverlayparagraphe3btn}>Register now</button>
                </div> 
               
              </div>
            </div>
            <div style={{ color: "white" }} className={` ${show1 ? style.productOverlayContainershow : style.productOverlayContainer}`}> 
              <div className={style.productOverlayheader} id="headerOverlay1">
                <h1 className={style.productOverlayheaderH1}>Smart contract escrow</h1>
                <h1 className={style.productOverlayheaderH1Back}  onClick={()=>handleClick(-1)}>
                  <span>
                    <Image src={blogArrowLeftBlack} 
                      alt="blogArrowLeftBlack"  />
                  </span> 
                  Go Back
                </h1>
              </div>
              <div className={style.productOverlayparagraphe}>
                <h1 className={style.productOverlayparagrapheh1}>/</h1>
                <p className={style.productOverlayparagraphep}> 
                Facilitates secure transactions and agreements between service providers and clients.
                </p>
              </div>
              <div className={style.productOverlayparagraphe2} >
                <div className={style.productOverlayparagraphe2ImageContainer}>
                  <Image 
                  src={Frame_logo}  
                    alt="cardImg" 
                    className={style.productOverlayparagraphe2ImageContainerImg}/>
                </div>
                <div className={style.productOverlayparagraphe2pContainer}>
                  <p className={style.productOverlayparagraphe2p}>
                    
Seaclub® is a groundbreaking decentralized platform designed to revolutionize the way experts and businesses collaborate in the ever-evolving landscape of work.
                  </p>
                </div> 
              </div>
              <div className={style.productOverlayparagraphe3}>
                <div className={style.productOverlayparagraphe3TitleContainer}>
                  <h1 className={style.productOverlayparagraphe3H1}>
                  Join the Seaclub® Beta and Shape the Future of Work
                  </h1>
                  <div className={style.productOverlayheaderpContainer}>
                    <p >
                      This is your opportunity to make an impact and shape the future of work.
                    </p>
                  </div>
                </div>
                <div className={style.productOverlayparagraphe3pContainer}>
                  
                <div  className={style.productOverlayImage3Container}>
                  <a href="#headerOverlay1">
                  <Image src={Backtotop}  alt="cardImg" />

                  </a>
                </div>
                  <p className={style.productOverlayparagraphe3p}>
                  Don't miss your chance to be at the forefront of a game-changing platform that's revolutionizing the way experts and businesses collaborate. 

                   </p>
                   <p className={style.productOverlayparagraphe3p}>
                    
                      By becoming a Seaclub®  beta user, you'll have exclusive early access to our cutting-edge decentralized ecosystem, where you can connect, collaborate, and grow in a secure and transparent environment.
                   </p>
                   <button className={style.productOverlayparagraphe3btn}>Register now</button>
                </div> 
               
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Product;
