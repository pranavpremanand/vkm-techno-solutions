import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-5VQJ7X5Q`;
    script.async = true;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VQJ7X5Q" 
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
