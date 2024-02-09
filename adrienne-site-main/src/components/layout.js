/* Layout wraps all pages so updates here effect everything */

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Nav from "./nav";

const site_title = "Adrienne Reisman's Portfolio";
const site_desc = `Adrienne Reisman is a Philadelphia-based artist, specializing in photo retouching and commissioned art focused on space and nature.`;
const site_url = "https://www.adriennereisman.com/";
const site_art = "/art/Summer Babe 2020.jpg";

const Layout = ({ children, navData }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{site_title}</title>
        <meta name="description" content={site_desc} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={site_url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site_title} />
        <meta name="twitter:url" content={site_url} />
        <meta name="twitter:image" content={site_art} />
        <meta name="twitter:description" content={site_desc} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={site_title} />
        <meta property="og:site_name" content={site_title} />
        <meta property="og:url" content={site_url} />
        <meta property="og:image" content={site_art} />
        <meta property="og:description" content={site_desc} />

        <script data-schema="NewsArticle" type="application/ld+json">{`{
          "@context": "http://schema.org",
          "@type": "Person",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${site_url}"
          },
          "name": "Danielle Morales",
          "description": "${site_desc}"
        }`}</script>
      </Helmet>

      {/* Full project included here: */}
      <main>
        <Nav navData={navData} />
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
