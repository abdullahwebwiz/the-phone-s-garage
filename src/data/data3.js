export const fetchApi = async ({ body, route }) => {
  try {
    const response = await fetch(process.env.URL+"" + route, {
      method: "POST",
      body: JSON.stringify(body),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong: " + error);
    return { msg: "failed" };
  }
};
