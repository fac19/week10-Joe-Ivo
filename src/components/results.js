import React from "react";
import RenderSong from "./render-song.js"
import "./results.css"

function Results(props) {
    const { recommendations } = props
    return (
        <div className="results-container">
            {recommendations.length ? recommendations.map(rec => <RenderSong song={rec}/>)
             : "no recommendations"}
        </div>
    )
}

export default Results