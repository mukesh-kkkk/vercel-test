import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vayu",
  description: "Next Gen Skin Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="robots" content="noindex,nofollow" />
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        // crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      ></link>
      {/* <link rel="canonical" href={`https://form.traya.health` + pathname} /> */}
      {/* <script type="text/javascript" src="/heap.js" async /> */}
      {/* <script type="text/javascript" src="/gtmHeadScript.js" async /> */}
      {/* <script type="text/javascript" src="/clarity.js" async /> */}
      {/* <Script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M9ZWNZW');`,
        }}
      ></Script>
      <Script
        id="clarity"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "irsc43i24s");`,
        }}
      ></Script> */}
    </head>

    <body style={{ fontSize: "16px" }}>
      {/* <ErrorBoundary> */}
      <main>{children}</main>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-M9ZWNZW`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* </ErrorBoundary> */}
    </body>
    {/* <ShopfloBridge /> */}
  </html>
  );
}
