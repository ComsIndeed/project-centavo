import { useState } from "react";
import EnvelopeSVG from "./Envelope.svg";

export default function Envelope({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`Envelope ${className} ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <EnvelopeSVG isOpen={isOpen}>{children}</EnvelopeSVG>
      </div>
    </>
  );
}
