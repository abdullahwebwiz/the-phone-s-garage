import Header from "@/components/header/header";
import style from "../blogs.module.css";
import * as contentful from "contentful/";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import NewsLetter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/footer";
import { onePostData,BlogsData } from "@/data/data2";

const Page = async (props) => {
  let x = await onePostData(props.params.id);
  console.log(x.items[0].sys.createdAt);
  const formattedDate = format(
    new Date(x.items[0].sys.createdAt),
    "MMM d, yyyy"
  );
  console.log(formattedDate);
  return (
    <>
      <Header />
      <div className={style.main2}>
        <div className={style.postcon}>
          <div className={style.title2}>
            {x.items[0].fields.title + " |  Post Uploaded on " + formattedDate}
          </div>
          <div className={style.body}>
            {documentToReactComponents(x.items[0].fields.body)}
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  let data1 = await BlogsData();
  return data1.map((data) => {
    id: data.fields.postid.toString();
  });
};
