import React from "react";
import RenderSong from "./render-song.js"
import "./results.css"

function Results(props) {
    const { recommendations } = props
    return (
        <div className="results-container">
            <h2>Track Recommendations</h2>
            {recommendations && recommendations.length ? recommendations.map((rec, i) => <RenderSong song={rec} key={i}/>)
             : "No song recommendations yet."}
        </div>
    )
}

export default Results