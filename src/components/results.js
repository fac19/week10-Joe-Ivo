import React from "react";
import RenderSong from "./render-song.js"
import "./results.css"

function Results(props) {
    const { recommendations } = props
    return (
        <div className="results-container">
            {recommendations && recommendations.length ? recommendations.map((rec, i) => <RenderSong song={rec} key={i}/>)
             : "no recommendations"}
        </div>
    )
}

export default Results