import { Route, Routes } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
}
