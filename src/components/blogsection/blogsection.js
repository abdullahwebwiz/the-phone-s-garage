import style from "./blogsection.module.css";
import BlogCard from "./blogcard/blogcard";
const BlogSection = () => {
  let posts = [
    {
      img: "1",
      title: "Phone Jailbreaking Guide",
      description:
        "Unlock hidden features and customize your mobile experience with this comprehensive phone jailbreaking tutorial.",
    },
    {
      img: "2",
      title: "Maximizing Phone Battery Life",
      description:
        "Discover practical strategies to extend your phone's battery longevity and optimize overall performance.",
    },
    {
      img: "3",
      title: "Easy DIY Phone Repairs",
      description:
        "Empower yourself with step-by-step guides to fix common phone issues independently, saving time and money.",
    },
    {
      img: "4",
      title: "Easy DIY Phone Repairs",
      description:
        "Empower yourself with step-by-step guides to fix common phone issues independently, saving time and money.",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.title}>Blogs & News 📝</div>
      <div className={style.blogscon}>
        {posts.map((data, index) => {
          return (
            <BlogCard
              title={data.title}
              description={data.description}
              key={index}
              img={data.img}
            />
          );
        })}
      </div>

      <div className={style.seemore}>See More</div>
    </div>
  );
};
export default BlogSection;
