import Image from "next/image";
import style from "./blogcard.module.css";
const BlogCard = ({ title, description, img }) => {
  return (
    <div className={style.main}>
      <Image src={"/post_img/" + img + ".png"} width={300} height={200} className={style.postimg}/>
      <div className={style.title}>{title}</div>
      <div className={style.learnmore}>Learn More</div>
    </div>
  );
};
export default BlogCard;
