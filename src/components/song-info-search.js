import React from "react";
import handleSearchTrack from "../util/handle-search-track"

function SongInfoSearch({ logInToken, songInfo, setSongInfo }) {
  const [trackSearch, setTrackSearch] = React.useState({
    trackSearchValue: "banana",
    artistSearchValue: "jack",
  });
  const token =
    "BQBghK98XiTJ5MIz5lEcUmga3HtN0zJmW4z5M9VBMrp9HUiRRBuEyLF_kE_qIHFebRaY8ojY6Xfxh-tlnRI";

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
    <form onSubmit={(event) => handleSearchTrack(event, trackSearch, token, setSongInfo)}>
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
