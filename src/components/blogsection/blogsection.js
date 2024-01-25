import style from "./blogsection.module.css";
import BlogCard from "./blogcard/blogcard";
import Link from "next/link";
import * as contentful from "contentful";
import { BlogsData } from "@/data/data2";

const BlogSection = async () => {
  let data1 = await BlogsData();

  return (
    <div className={style.main}>
      <div className={style.title}>Blogs & News 📝</div>
      <div className={style.blogscon}>
        {data1.map((data, index) => {
          return (
            <Link
              href={"/blogs/" + data.fields.postid}
              style={{ color: "black" }}
              key={data.fields.postid}
            >
              {" "}
              <BlogCard
                title={data.fields.title}
                img={`https:${data.fields.thumbnail.fields.file.url}`}
                x={false}
                key={data.fields.postid}
              />
            </Link>
          );
        })}
      </div>

      <div className={style.seemore}>See More</div>
    </div>
  );
};
export default BlogSection;
