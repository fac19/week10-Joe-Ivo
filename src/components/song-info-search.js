import React from "react";

function SongInfoSearch({ logInToken, songInfo, setSongInfo }) {
  const [trackSearch, setTrackSearch] = React.useState({
      trackSearchValue: "",
      artistSearchValue: ""
  });

  function handletrackChange(event) {
    const newTrackSearch = {...trackSearch, trackSearchValue: event.target.value}
    setTrackSearch(newTrackSearch);
  }

  function handleArtistChange(event) {
    const newArtistSearch = {...trackSearch, artistSearchValue: event.target.value}
    setTrackSearch(newArtistSearch);
  }

  function handleSearchTrack(event) {    
    event.preventDefault();
    if(!trackSearch) return;
    alert(`Submit clicked and we're going to fetch with ${trackSearch.trackSearchValue} and ${trackSearch.artistSearchValue}`);
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
