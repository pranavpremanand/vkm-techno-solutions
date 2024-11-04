import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Header from "./componets/LandingPage/Header";
import Footer from "./componets/Footer";
import { Home } from "./pages/website/Home";

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      /> */}

      {/* Landing Pages */}
      <Route
        path="/web-development"
        element={
          <>
            <Header />
            <LandingPage page={"web-development"} />
            <Footer />
          </>
        }
      />
      <Route
        path="/app-development"
        element={
          <>
            <Header />
            <LandingPage page={"app-development"} />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
