export const getGifs = async (category) => {
  const apiKey = "bwWyfr6zslYChJCOLgNIgCdPafbhvpsf";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images: { downsized_medium } }) => ({
    id: id,
    title: title,
    url: downsized_medium.url,
  }));
  return gifs;
};
