// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, author }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {/* Here I have added Google AdSense script */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4666288005576632"
        crossorigin="anonymous">
      </script>
      {/*Here I have added Google Analytics script */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-LH0RMVL6PD`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LH0RMVL6PD');
        `}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="Thoughtcoders" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="URL to a default image" />
      <meta property="og:url" content="Current page URL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="URL to a default image" />
    </Helmet>
  );
};


export default SEO;
