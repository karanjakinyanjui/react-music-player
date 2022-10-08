import axios from "axios";

export const getPlaylist = async (link) => {
  const { data } = await axios.get(link);
  return data
    .match(/(?<=watch\s*).*?(?=\s*list)/gs)
    .filter((i) => i.startsWith("?"))
    .map((i) => "https://www.youtube.com/watch" + i.replace("&amp", ""));
};
