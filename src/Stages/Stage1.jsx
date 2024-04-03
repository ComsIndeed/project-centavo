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
        <div className="Page" id="Page1">
          <h1>This page has content</h1>
        </div>
        <div className="Page" id="Page2">
          <h1>This page has content</h1>
        </div>
        <div className="Page" id="Page3">
          <h1>This page has content</h1>
        </div>
        <div className="Page" id="Page4">
          <h1>This page has content</h1>
        </div>
        <div className="Page" id="Page5">
          <h1>This page has content</h1>
        </div>
        <div className="Page" id="Page6">
          <h1>This page has content</h1>
        </div>
      </div>
    </>
  );
}
