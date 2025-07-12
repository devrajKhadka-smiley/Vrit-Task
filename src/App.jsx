import { useState } from "react";
import "./styles/animations.css";
import FigmaComponent1 from "./components/FirstComponent";
import FigmaComponent2 from "./components/SecondComponent";
import VideoComponent from "./components/ThirdComponent";
import { ModernNavigation } from "./components/ModernNavigation";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderActiveComponent = () => {
    switch (activeSection) {
      case "home":
        return <FigmaComponent1 />;
      case "documents":
        return <FigmaComponent2 />;
      case "apps":
        return <VideoComponent />;
      default:
        return <FigmaComponent1 />;
    }
  };

  return (
    <div className="app-container">
      <main>{renderActiveComponent()}</main>

      <div
        className="nav-wrapper"
        style={{
          position: "fixed",
          bottom: "25px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
        }}
      >
        <ModernNavigation onChange={setActiveSection} />
      </div>
    </div>
  );
}

export default App;
