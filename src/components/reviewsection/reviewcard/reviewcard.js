import Image from "next/image";
import style from "./reviewcard.module.css";
const ReviewCard = ({ name, msg, stars }) => {
  const starArray = Array.from({ length: stars }, (_, index) => index);
  return (
    <div className={style.main}>
      <div className={style.customer_name}>{name}</div>
      <div className={style.message}>{msg}</div>
      <div className={style.stars}>
        {starArray.map((data, index) => {
          return (
            <Image
              key={index}
              src={"/golden_star.png"}
              width={30}
              height={30}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ReviewCard;
