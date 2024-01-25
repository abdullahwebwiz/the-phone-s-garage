import style from "./whyus.module.css";
import WhyUsOne from "./whyusone/whyusone";
const WhyUs = () => {
  const mydata = [
    {
      img: "1",
      title: "Free Shipping",
      subtext: "Enjoy Free Shipping on certain Product & locations",
    },
    {
      img: "2",
      title: "100% Reliable",
      subtext:
        "All Products and services on thephonesgarage.com are 100% authentic.",
    },
    {
      img: "3",
      title: "Discounts & Deals",
      subtext: "Enjoy high discounts and deals on thephonesgarage.com",
    },
    {
      img: "4",
      title: "Top-Notch Support",
      subtext: "Get support from our care program on any matter.",
    },
  ];       
  return (
    <div className={style.main}>
      <div className={style.title}>Why Choose Us 🤝</div>
      {mydata.map((data, index) => {
        return (
          <WhyUsOne
            key={index}
            img={data.img}
            title={data.title}
            subtext={data.subtext}
          />
        );
      })}
    </div>
  );
};
export default WhyUs;
