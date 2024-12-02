import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GoogleTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Tag Manager Script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5VQJ7X5Q');
    `;
    document.head.appendChild(gtmScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gtmScript);
    };
  }, []);

  useEffect(() => {
    // Push page view to GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          search: location.search,
          url: window.location.href,
        },
      });
    }
  }, [location]);

  return (
    <Helmet>
      <noscript dangerouslySetInnerHTML={{
        __html: `
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VQJ7X5Q"
            height="0" 
            width="0" 
            style="display:none;visibility:hidden"
          ></iframe>
        `
      }} />
    </Helmet>
  );
};

export default GoogleTracking;
