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
          <h3 className="paperTexture">
            I just to tell you I'm thankful. Like seriously.. I love how much
            you've changed me, try ko rin imaging good influence sayo hahahaha{" "}
            <br /> <br />
            (scroll down nalang, kalmahan pag scroll di ko masyado naayos yung
            code HAHAHAHAH)
          </h3>
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
          <div className="Backgrounds"></div>
          <h1 className="paperTexture">
            Hindi ako makatulog for a week dahil sayo HAHAHAHAH I didn't really
            get to tell you my side regarding my admiration or interest for you
            as well. Pretty sure mine started somewhen around nung nagstart
            sayo, baka earlier but not sure.
          </h1>
        </div>
        <div className="Page" id="Page3">
          <div className="Backgrounds"></div>
          <h3 className="paperTexture">
            What happened was similar to yours, I guess mas marami lang attempts
            patigilin. And same as you, I loved our interactions, and I sure
            hope we get to have more quality time together. <br /> <br />{" "}
            <i>
              Btw sumali lang ako sa dama this year para malabanan ka hahahah
            </i>
          </h3>
        </div>
        <div className="Page" id="Page4">
          <div className="Backgrounds"></div>
          <h3 className="paperTexture">
            I was told yung confession mo dapat coding pala, ang cute nung idea{" "}
            <br />
            I made this site just to ask you something. I hope you like it
            HAHAHAHHA <br /> <br /> I know I could've asked you this weeks ago,
            f2f man or sa chats, but I figured mas maganda dito gawin
          </h3>
        </div>
        <div className="Page" id="FormPage">
          <FormPageContent />
        </div>
      </div>
    </>
  );
}

import { addDoc, collection } from "firebase/firestore";
import { database } from "../firebase";

function FormPageContent() {
  const [selectedOption, setSelectedOption] = useState("Nothing was selected");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
    }
  }, [submitted]);

  const handleSubmit = () => {
    setSubmitted(true);
    addDoc(collection(database, "responses"), {
      response: selectedOption,
      additionalNotes: additionalNotes,
    });
  };

  return (
    <>
      <h3 className="Exclude">Pwede ka bang maging date ko sa prom?</h3>
      <div className="Exclude">
        <button
          className={selectedOption === "Yes" ? "selected" : ""}
          id="YesButton"
          onClick={() => {
            setSelectedOption("Yes");
          }}
        >
          Yes
        </button>
        <button
          className={selectedOption === "No" ? "selected" : ""}
          id="NoButton"
          onClick={() => {
            setSelectedOption("No");
          }}
        >
          No
        </button>
      </div>
      <p style={{ padding: "0.5em 2em" }}>
        Ill understand ano man desisyon mo, lumakas lang loob ko magtanong, sana
        di ka mapressure hahabaha
      </p>
      <label className="Exclude">Additional notes:</label>
      <textarea
        className="Exclude"
        style={{ minHeight: "10em", fontSize: "1em" }}
        name="AdditionalNotes"
        id="AdditionalNotes"
        placeholder="You can write here"
        onChange={(e) => {
          setAdditionalNotes(e.target.value);
        }}
      ></textarea>
      <button
        onClick={handleSubmit}
        className={"Exclude " + submitted ? "selected" : ""}
      >
        {submitted ? "Submitted, thank you for your time" : "Submit"}
      </button>
    </>
  );
}
