import React from "react"
import "./render-song.css"

function RenderSong(props) {
    const { song } = props;
    console.log(song)
    return (
        <div className="rendered-song">
            <img src={song.album.image.url}></img>
            <span className="rendered-song__info">
                <h3>{song.name}</h3>
                <p>{song.artists.join(", ")}</p>
                <p>{song.album.name}</p>
                <p>{song.album.year}</p>
            </span>
            <p className="rendered-song__listen"><a href={song.url}>Listen</a></p>
        </div>
    );
}

export default RenderSong;