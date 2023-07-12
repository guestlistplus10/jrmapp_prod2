import { React } from "react";
import issues from "../../assets/video/issues.mp4";



export const Startingvideo = () => {
  return (
      <div >
      <div className="herovideo">
      <div className="video-texta">
      <img src="/dark/assets/imgs/logo-light.png" class="img-one-third" alt="JRM Logo"/>
      </div>
      </div>
      <div className="introvideo">
      <video src= {issues} type="video/mp4" autoPlay loop muted />
      
      </div>

      </div>
  );
};