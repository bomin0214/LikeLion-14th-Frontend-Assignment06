import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Air from "./pages/Air";
import Life from "./pages/Life";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/air" element={<Air />} />
        <Route path="/life" element={<Life />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
