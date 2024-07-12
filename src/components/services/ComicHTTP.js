export const GetComicList = async () => {
  try {
    const resp = await fetch(
      "https://comicvine.gamespot.com/api/series_list/?api_key=079d61bd454e81f28d8524d022c26bf33d68848a&format=json"
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    console.error(error);
    //throw error;
  }
};
