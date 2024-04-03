import { useState } from "react";
import Envelope from "../Assets/Envelope/Envelope";
import Paper from "../Assets/Envelope/Paper";
import "animate.css";
import { useNavigate } from "react-router-dom";

export default function LandingStage() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const navigation = useNavigate();

  const handleNextPage = () => {
    setHide(true);
    setTimeout(() => {
      navigation("/1");
    }, 1000);
  };

  return (
    <>
      <div
        className={`LandingStage ${isOpen ? "open" : ""} ${hide ? "hide" : ""}`}
      >
        <Envelope
          className="animate__animated animate__fadeInUp"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        >
          <Paper onClick={handleNextPage}>
            Hi Cailsey, welcome sa ginawa kong site hahaha
            <br />
            <br />I made this just to tell you some things and ask you something
            at the end. 😊
            <br />
            (Pakiclick nalang to proceed )
          </Paper>
        </Envelope>
      </div>
    </>
  );
}
