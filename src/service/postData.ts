
export const postData = async (url: string, token: string, query: string, count=10) => {

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query, count: count}),
    });
    const data = await response.json()
   return data.suggestions

  } catch (error) {
    console.log(error);
  }
};
