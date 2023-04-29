import { useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import BlogCardContainer from "../../../components/blog/BlogCardContainer";
import BlogHero from "../../../components/blog/BlogHero";
import BlogOverlay from "../../../components/blog/BlogOverlay";
import BlogSidebar from "../../../components/blog/BlogSidebar";
import style from "../../styles/blog/blog.module.css";
const Blog = () => {
  // based on this state details of blog is show as a overlay
  const [showOverlay, setShowOverlay] = useState(false);
  // this state set the overlay height
  const [OverlayHeight, setOverlayHeight] = useState(0);
  // this state set the blog page height
  const [divHeight, setDivHeight] = useState(0);
  // when user click the read more button the this handler is fired and go to the top and set state to show and hide overlay
  const handleClick = () => {
    setShowOverlay(!showOverlay);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // set the blog page hight to the state
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.offsetHeight;
      setDivHeight(divHeight);
    }
  }, []);
  // calculate the padding of blog page dynamically
  let bottomPadding = OverlayHeight - divHeight;
  return (
    <Layout>
      <section className={style.blogContainer}>
        {/* set padding for show the hole overlay page */}
        <section
          style={{
            paddingBottom: `${showOverlay ? bottomPadding : 0}px`,
          }}
          className={style.mainContent}
        >
          <div className={style.topText}>
            <h1>Join the conversation:</h1>
            <p>
              Exploring the Latest in Web3, Decentralization, and the Future of
              Work
            </p>
          </div>
          <div ref={divRef}>
            {/* this is side bar of blog page */}
            <div className={style.sidebar}>
              <BlogSidebar />
            </div>
            {/* this is all container fro blog page */}
            <div className={style.content}>
              {/* showing a part of a blog in hero section of blog page */}
              <BlogHero handleClick={handleClick} />
              {/* all blog card is showing here  */}
              <BlogCardContainer />
            </div>
          </div>
          {/* this is overlay page  */}
          <div style={{ color: "black" }}>
            <BlogOverlay
              setOverlayHeight={setOverlayHeight}
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Blog;
