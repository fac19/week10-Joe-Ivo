import getSongProperties from "./get-song-properties";

export default function handleSearchTrack(
  event,
  trackSearch,
  token,
  setSongInfo,
  songInfo,
  songAudioFeatures,
  setAudioFeatures
) {
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: { Authorization: "Bearer " + token.token },
  };

  return fetch(
    `https://api.spotify.com/v1/search?q=track:${trackSearch.trackSearchValue}%20artist:${trackSearch.artistSearchValue}&type=track&limit=1`,
    requestOptions
  )
    .then((res) => {
        console.log(trackSearch.trackSearchValue, trackSearch.artistSearchValue)
        console.log(requestOptions)
        console.log(token)
        console.log(typeof token)
      if (res.status !== 200) {
        throw new Error(
          `Fetch request did not work. Error code: ${res.status}`
        );
      }
      return res.json();
    })
    .then((data) => {
      if (data.tracks.items.length === 0) {
        throw new Error(`No results in search`);
      }
      setSongInfo({
        id: data.tracks.items[0].id,
        album: {          
          name: data.tracks.items[0].album.name,
          year: data.tracks.items[0].album.release_date,
          image:
            data.tracks.items[0].album.images[1].url ||
            data.tracks.items[0].album.images[1].url,
        },
        artists: data.tracks.items[0].artists.map((artist) => artist.name),
        url: data.tracks.items[0].external_urls.spotify,
        name: data.tracks.items[0].name,
      });
    })
    .then((data) => {
        getSongProperties(songInfo, songAudioFeatures, setAudioFeatures, token)
    })
    .catch((error) => console.error(error));
}
