import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import Records from "./pages/Records";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
