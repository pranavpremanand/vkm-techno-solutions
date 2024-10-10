import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import { WebDevelopment } from "./pages/WebDevelopment/WebDevelopment";
import Footer from "./componets/Footer";

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
    </Routes>
  );
}
