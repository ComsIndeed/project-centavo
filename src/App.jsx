import { Route, Routes } from "react-router-dom";
import LandingStage from "./Stages/LandingStage";
import Stage1 from "./Stages/Stage1";

function App() {
  return (
    <>
      <div className="StageView">
        <Routes>
          <Route path="/" element={<LandingStage />} />
          <Route path="/1" element={<Stage1 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
