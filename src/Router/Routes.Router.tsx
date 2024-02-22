import { Routes, Route } from "react-router-dom";
import TabControl from "../Components/TabControl/TabControl.component";
import GlowingSpotlight from "../Components/GlowingSpotLight/GlowingSpotlight.component";

export default function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/tabcontrol" element={<TabControl />} />
        <Route path="/glowingspotlight" element={<GlowingSpotlight />} />
      </Routes>
    </div>
  );
}
