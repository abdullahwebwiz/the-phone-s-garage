export const fetchApi = async ({ body, route }) => {
  try {
    const response = await fetch("http://localhost:3000" + route, {
      method: "POST",
      body: JSON.stringify(body),
    });
    let data = await response.json();
    console.log(data);
    return { msg: "success", data: data };
  } catch (error) {
    console.log("something went wrong: " + error);
    return { msg: "failed" };
  }
};
