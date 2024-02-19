import { Routes, Route } from "react-router-dom";
import TabControl from "../Components/TabControl.component";

export default function Routess() {
  return (
    <Routes>
      <Route path="/tabcontrol" element={<TabControl />} />
    </Routes>
  );
}
