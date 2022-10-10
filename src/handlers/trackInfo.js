export async function getTrackInfo({ player }) {
  const nestedPlayer = player.player;
  if (nestedPlayer.getVideoData) {
    return getYoutubeInfo(nestedPlayer);
  } else if (nestedPlayer.getCurrentSound) {
    return await getSoundCloudInfo(nestedPlayer);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(player);
      resolve({ duration: player.duration });
    }, 200);
  });
}

const getYoutubeInfo = (player) => {
  let { title, video_id, author: artist } = player.getVideoData();
  const duration = player.getDuration();
  const thumbnail = `https://img.youtube.com/vi/${video_id}/0.jpg`;
  if (!artist && title.includes("-")) {
    [artist, title] = title.split("-", 2);
  }

  return { title, thumbnail, artist, duration };
};
const getSoundCloudInfo = async (player) => {
  return new Promise((resolve) => {
    player.getCurrentSound((songData) => {
      if (songData) {
        resolve({
          duration: Number(songData.duration / 1000),
          title: songData.title,
          artist: songData.user.username,
          thumbnail: songData.artwork_url.replace("-large", "-t500x500"),
        });
      }
    });
  });
};
