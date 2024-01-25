import * as contentful from "contentful";
export let BlogsData = async () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let result = await client.getEntries({
    content_type: "blogPost",
  });
  return result.items;
};

export let onePostData = async (id) => {
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
