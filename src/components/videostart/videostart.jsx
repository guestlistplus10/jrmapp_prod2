import React from "react";
import issues from "public/dark/assets/video/issues.mp4";

const Video = ({ video }) => {
    return (
        <div>
            <div className="overlay"></div>
            <video src= {issues} autoPlay loop muted />
            <div className="video-text">
                <h1>JRM DIE KINGS</h1>
              
                </div>
        </div>
    );
};

export default Video;