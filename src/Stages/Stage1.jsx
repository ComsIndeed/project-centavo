import "animate.css";

import Trees1 from "../Assets/Backgrounds/Stage1/trees1.png";
import Trees2 from "../Assets/Backgrounds/Stage1/trees2.png";
import Trees3 from "../Assets/Backgrounds/Stage1/trees3.png";
import Sun from "../Assets/Backgrounds/Stage1/sun.png";
import Mountains from "../Assets/Backgrounds/Stage1/mountains.png";

export default function Stage1() {
  return (
    <>
      <div className="Stage1 animate__animated animate__fadeIn">
        <h1>Stage 1</h1>
        <div className="backgrounds">
          {/* <img src={Sun} />
          <img src={Mountains} />
          <img src={Trees3} />
          <img src={Trees2} /> */}
          <img src={Trees1} />
        </div>
      </div>
    </>
  );
}
