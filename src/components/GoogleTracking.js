import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GoogleTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics (gtag.js) Script
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16758064714';
    document.head.appendChild(gaScript);

    // Google Analytics Configuration
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-16758064714');

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
        j.src='https://www.googletagmanager.com/gtag/js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5VQJ7X5Q');
    `;
    document.head.appendChild(gtmScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gaScript);
      document.head.removeChild(gtmScript);
    };
  }, []);

  // Track page views
  useEffect(() => {
    // Google Analytics page view tracking
    if (window.gtag) {
      window.gtag('config', 'AW-16758064714', {
        'page_path': location.pathname + location.search
      });
    }

    // Google Tag Manager page view event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          search: location.search,
          url: window.location.href
        }
      });
    }
  }, [location]);

  return (
    <Helmet>
      {/* Noscript tag for Google Tag Manager */}
      <noscript>
        {`
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VQJ7X5Q"
            height="0" 
            width="0" 
            style="display:none;visibility:hidden"
          ></iframe>
        `}
      </noscript>
    </Helmet>
  );
};

export default GoogleTracking;