import React from "react";
import handleSearchTrack from "../util/handle-search-track"
// import getRecommendations from "../util/get-recommendations.js"
import getSongProperties from "../util/get-song-properties.js"

function SongInfoSearch({ logInToken, songInfo, setSongInfo, songAudioFeatures, setAudioFeatures }) {
  const [trackSearch, setTrackSearch] = React.useState({
    trackSearchValue: "",
    artistSearchValue: "",
  });
  const token =
    "BQCYhB_BiiGSwJmjqZ3Mkro3p4CtbA90OQUnEcsgswhtfOpXBualT7VFp7PDQbJYRn7GIbt98rDopsHABSY";
    // "";

  function handletrackChange(event) {
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

  return (
    <form onSubmit={(event) => handleSearchTrack(event, trackSearch, token, setSongInfo, songInfo, songAudioFeatures, setAudioFeatures)}
        >
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
          Artist
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
