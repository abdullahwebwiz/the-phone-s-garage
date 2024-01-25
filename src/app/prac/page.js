import Image from "next/image";
import * as contentful from "contentful";
const x = async () => {
  let client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let result = await client.getEntries({
    content_type: "blogPost",
  });
  return result.items;
};

const Page = async () => {
  let data = await x();
  const thumbnailUrl = data[0].fields.thumbnail.fields.file.url;
  console.log(thumbnailUrl);
  return (
    <div>
      <Image src={"https:"+thumbnailUrl} width={300} height={200} />
    </div>
  );
};
export default Page;
