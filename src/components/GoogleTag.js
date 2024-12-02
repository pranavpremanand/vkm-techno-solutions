import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // For React Router

const GoogleTags = () => {
  const { pathname } = useLocation(); // Detect route changes

  useEffect(() => {
    // Initialize gtag
    const gtag = (...args) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    };

    // Configure Google Analytics/Tag Manager
    gtag("js", new Date());
    gtag("config", "AW-16758064714", {
      page_path: pathname, // Track page path
    });
  }, [pathname]); // Run on route change

  return null;
};

export default GoogleTags;
