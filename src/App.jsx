import { Profile } from "./Pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Pages/HomeScreen/HomeScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
