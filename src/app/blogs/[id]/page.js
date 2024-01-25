import Header from "@/components/header/header";
import style from "../blogs.module.css";
import * as contentful from "contentful/";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import NewsLetter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/footer";

let data = async (id) => {
  console.log(id);
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let result = await client.getEntries({
    content_type: "blogPost",
    "fields.postid": id.toString(),
  });
  return result;
};

const Page = async (props) => {
  let x = await data(props.params.id);
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
