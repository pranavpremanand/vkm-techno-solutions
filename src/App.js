import { Route, Routes } from "react-router-dom";
import Header from "./componets/LandingPage/Header";
import { WebDevelopment } from "./pages/WebDevelopment/WebDevelopment";
import Footer from "./componets/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AppDevelopment from "./pages/AppDevelopment/AppDevelopment";

AOS.init({
  once: true,
  duration:500,
});
export default function App() {
  return (
    <Routes>
      <Route
        path="/web-development"
        element={
          <>
            <Header />
            <WebDevelopment />
            <Footer />
          </>
        }
      />
      <Route
        path="/app-development"
        element={
          <>
            <Header />
            <AppDevelopment />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
