import Header from "@/components/header/header";
import style from "./blogs.module.css";
import BlogCard from "@/components/blogsection/blogcard/blogcard";
import * as contentful from "contentful";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import NewsLetter from "@/components/newsletter/newsletter";

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

const Page = async () => {
  let data1 = await data();
  return (
    <>
      <Header />
      <div className={style.main1}>
        <div className={style.title1}>News & Updates</div>
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
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default Page;

export const generateStaticParams = async () => {
  let data1 = await data();
  return data1.map((data) => {
    id: data.fields.postid.toString();
  });
};
