import * as contentful from "contentful";
let postBody = async () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let data = await client.getEntry("4cfuiQmJT96sjcouwBBXfO");
  let x = await data.json();
  return x;
};
export default postBody;
