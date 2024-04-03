import "animate.css";

import Trees1 from "../Assets/Backgrounds/Stage1/trees1.png";
import Trees2 from "../Assets/Backgrounds/Stage1/trees2.png";
import Trees3 from "../Assets/Backgrounds/Stage1/trees3.png";
import Sun from "../Assets/Backgrounds/Stage1/sun.png";
import Mountains from "../Assets/Backgrounds/Stage1/mountains.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Stage1() {
  return (
    <>
      <div className="Stage1 animate__animated animate__fadeIn">
        <div className="Page" id="Page1">
          <h1>YO YO WASSUP BRO</h1>
          <div className="Backgrounds">
            <img
              className="animate__animated animate__fadeInUp animate__delay-2s"
              src={Sun}
            />
            <img
              className="animate__animated animate__fadeInUp animate__delay-1s"
              src={Mountains}
            />
            <img
              className="animate__animated animate__fadeInUp "
              src={Trees3}
            />
            <img
              className="animate__animated animate__fadeInUp "
              src={Trees2}
            />
            <img
              className="animate__animated animate__fadeInUp "
              src={Trees1}
            />
          </div>
        </div>
        <div className="Page" id="Page2">
          <h1>This page has content</h1>
          <div className="Backgrounds"></div>
        </div>
        <div className="Page" id="Page3">
          <h1>This page has content</h1>
          <div className="Backgrounds"></div>
        </div>
        <div className="Page" id="Page4">
          <h1>This page has content</h1>
          <div className="Backgrounds"></div>
        </div>
        <div className="Page" id="Page5">
          <h1>This page has content</h1>
          <div className="Backgrounds"></div>
        </div>
        <div className="Page" id="Page6">
          <h1>This page has content</h1>
          <div className="Backgrounds"></div>
        </div>
        <div className="Page" id="FormPage">
          <FormPageContent />
        </div>
      </div>
    </>
  );
}

function FormPageContent() {
  const [handleMouseMove, setHandleMouseMove] = useState(() => {});

  return (
    <>
      <h1>Would you?</h1>
      <div className="form">
        <button id="YesButton">Yes</button>
        <button
          id="NoButton"
          onMouseMove={handleMouseMove}
          onTouchStart={(event) => event.preventDefault()} // Prevent default touch behavior
        >
          No
        </button>
      </div>
      <label>Additional notes:</label>
      <textarea
        name="AdditionalNotes"
        id="AdditionalNotes"
        placeholder="You can write here"
      ></textarea>
      <div className="Backgrounds"></div>
    </>
  );
}
