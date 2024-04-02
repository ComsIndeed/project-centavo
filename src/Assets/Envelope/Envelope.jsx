import EnvelopeSVG from "./Envelope.svg";
import "animate.css";

export default function Envelope({ children, className, isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`Envelope ${className} ${isOpen ? "open " : ""}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <EnvelopeSVG isOpen={isOpen}>{children}</EnvelopeSVG>
      </div>
    </>
  );
}
