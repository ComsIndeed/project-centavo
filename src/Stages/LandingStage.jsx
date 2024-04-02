import Envelope from "../Assets/Envelope/Envelope";
import Paper from "../Assets/Envelope/Paper";
import "animate.css";

export default function LandingStage() {
  return (
    <>
      <div className="LandingStage">
        <Envelope className="animate__animated animate__fadeInUp">
          <Paper>Wassup sino man yan</Paper>
        </Envelope>
      </div>
    </>
  );
}
