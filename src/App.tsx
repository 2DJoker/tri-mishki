import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BookingProvider } from "./booking";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hutor from "./pages/Hutor";
import Bani from "./pages/Bani";
import Bath from "./pages/Bath";
import Room from "./pages/Room";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // ждём, пока страница отрендерится, и скроллим к якорю
      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Градиент для «речной линии» — объявляется один раз. */
function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A3526" stopOpacity="0" />
          <stop offset=".5" stopColor="#8C2F26" />
          <stop offset="1" stopColor="#3A3526" stopOpacity="0" />
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
          <Route path="/bani/:id" element={<Bath />} />
          <Route path="/nomera/:id" element={<Room />} />
          {/* старый раздел «Русская баня» объединён с «Банями» */}
          <Route path="/banya" element={<Navigate to="/bani" replace />} />
        </Routes>
      </main>
      <Footer />
    </BookingProvider>
  );
}
