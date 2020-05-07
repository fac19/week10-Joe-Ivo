import React from "react";

function SongInfoSearch({ logInToken, songInfo, setSongInfo }) {
  const [trackSearch, setTrackSearch] = React.useState({
    trackSearchValue: "",
    artistSearchValue: "",
  });
  const token =
    "BQCOTrxW4kX2sNtxvyizWv_VjGHcG-IP-THbTpCUU2Fgj9yF1POHNNGqX-3MhVrCmOtxTSW8qfJyAdYaDcA";

  function handletrackChange(event) {
    // console.log("handletrackChange -> event", event.target.value)
    const newTrackSearch = {
      ...trackSearch,
      trackSearchValue: event.target.value,
    };
    setTrackSearch(newTrackSearch);
  }

  function handleArtistChange(event) {
    const newArtistSearch = {
      ...trackSearch,
      artistSearchValue: event.target.value,
    };
    setTrackSearch(newArtistSearch);
  }

  function handleSearchTrack(event) {
    event.preventDefault();
    if (!trackSearch) return;
    alert(
      `Submit clicked and we're going to fetch with ${trackSearch.trackSearchValue} and ${trackSearch.artistSearchValue}`
    );

    const requestOptions = {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    };

    fetch(
      `https://api.spotify.com/v1/search?q=track:${trackSearch.trackSearchValue}%20artist:${trackSearch.artistSearchValue}&type=track&limit=1`,
      requestOptions
    )
      .then((res) => {
        console.log("handleSearchTrack -> res", res);
        alert("call has been made yo");
        if (res.status !== 200) {
          throw new Error(
            `Fetch request did not work. Error code: ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log("handleSearchTrack -> data", data);
        if (data.tracks.items.length === 0) {
          throw new Error(`No results in search`);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <form onSubmit={(event) => handleSearchTrack(event)}>
      <fieldset>
        <legend>Search Bar</legend>
        <label htmlFor="searchTrack">
          Track
          <input
            type="text"
            aria-label="Input track here"
            id="searchTrack"
            name="searchTrack"
            placeholder="Input track here"
            value={trackSearch.trackSearchValue}
            onChange={(event) => handletrackChange(event)}
            required
          />
        </label>
        <label htmlFor="searchArtist">
          Track
          <input
            type="text"
            aria-label="Input artist here"
            id="searchArtist"
            name="searchArtist"
            placeholder="Input artist here"
            value={trackSearch.artistSearchValue}
            onChange={(event) => handleArtistChange(event)}
            required
          />
        </label>
        <input type="submit" value="Search" />
      </fieldset>
    </form>
  );
}

export default SongInfoSearch;
