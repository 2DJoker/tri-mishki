import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BookingProvider } from "./booking";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hutor from "./pages/Hutor";
import Bani from "./pages/Bani";
import Banya from "./pages/Banya";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Градиент для «речной линии» — объявляется один раз. */
function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7AA098" stopOpacity="0" />
          <stop offset=".5" stopColor="#C8723A" />
          <stop offset="1" stopColor="#7AA098" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <BookingProvider>
      <GradientDefs />
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hutor" element={<Hutor />} />
          <Route path="/bani" element={<Bani />} />
          <Route path="/banya" element={<Banya />} />
        </Routes>
      </main>
      <Footer />
    </BookingProvider>
  );
}
