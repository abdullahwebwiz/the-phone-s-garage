import style from "./reviewsection.module.css";
import ReviewCard from "./reviewcard/reviewcard";
const ReviewSection = () => {
  let data = [
    { name: "Elon Musk", msg: "Satisfied with the product quality.", stars: 4 },
    { name: "Harry Potter", msg: "happy with the service.", stars: 5 },
    { name: "Salman Khan", msg: "Product did meet expectations.", stars: 4 },
    { name: "Amir Khan", msg: "Satisfactory experience overall.", stars: 5 },
    { name: "Mohammad Shami", msg: "Recommend this store.", stars: 4 },
    { name: "Babur Azam", msg: "Satisfied with the purchase.", stars: 5 },
    { name: "Shahid Afridi", msg: "100% what I expected.", stars: 4 },
    { name: "Shaheen Afridi", msg: "Very satisfied", stars: 5 },
  ];

  return (
    <div className={style.main}>
      <div className={style.bar}>
        <div className={style.title}>Customer Reviews 🌟</div>
        {data.map((data, index) => {
          return (
            <ReviewCard
              key={index}
              name={data.name}
              msg={data.msg}
              stars={data.stars}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ReviewSection;
