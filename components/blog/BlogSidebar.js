import style from "../../src/styles/blog/blogSidebar.module.css";
import { BsArrowRightShort } from "react-icons/bs";
const BlogSidebar = () => {
  return (
    // blog sidebar items here
    <div className={style.sidebarContainer}>
      <ul>
        <li>
          seaclub <BsArrowRightShort className={style.arrow} />
        </li>
        <li>
          freelancer <BsArrowRightShort className={style.arrow} />
        </li>
        <li>
          web3 trands <BsArrowRightShort className={style.arrow} />
        </li>
        <li>
          ai tools <BsArrowRightShort className={style.arrow} />
        </li>
      </ul>
    </div>
  );
};

export default BlogSidebar;
