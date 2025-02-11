const BASE_URL = "https://api.jikan.moe/v4";

export const getTopAnimes = async () => {
  const res = await fetch(`${BASE_URL}/top/anime`);
  const data = await res.json();
  return data.data;
};

export const searchAnimes = async (query) => {
  const res = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=20`
  );
  const data = await res.json();
  console.log(data.data);
  return data.data;
}; 
