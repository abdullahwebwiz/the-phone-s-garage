import style from "./blogsection.module.css";
import BlogCard from "./blogcard/blogcard";
import Link from "next/link";
import * as contentful from "contentful";

let data = async () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let result = await client.getEntries({
    content_type: "blogPost",
  });
  return result.items;
};
const BlogSection = async () => {
  let data1 = await data();

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
