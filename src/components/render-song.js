import React from "react"

function RenderSong(props) {
    const { song } = props;
    console.log(song)
    return (
        <div>
            <h3>{song.name}</h3>
            <img src={song.album.image.url}></img>
            <p>{song.artists.join(", ")}</p>
            <p>{song.album.name}</p>
            <p>{song.album.year}</p>
            <p><a href={song.url}>Listen</a></p>
        </div>
    );
}

export default RenderSong;