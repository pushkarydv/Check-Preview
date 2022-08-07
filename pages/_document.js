import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ` as this app is of just one route so adding GTags in _document only` */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1ECMQ6ND3L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-1ECMQ6ND3L');`,
          }}
        />
        <meta charSet="UTF-8" />
        <meta name="title" content="Card Preview" />{" "}
        <meta
          name="description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />{" "}
        <meta
          name="keywords"
          content="card, metadata, mets, tags, banner, web cards, Check Preview"
        />{" "}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />{" "}
        <meta name="language" content="English" />{" "}
        <meta name="author" content="Pushkar Yadav" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://checkpreview.vercel.app" />{" "}
        <meta property="og:title" content="Card Preview" />{" "}
        <meta
          property="og:description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />{" "}
        <meta
          property="og:image"
          content="https://checkpreview.vercel.app/banner.png"
        />{" "}
        <meta property="twitter:card" content="summary_large_image" />{" "}
        <meta
          property="twitter:url"
          content="https://checkpreview.vercel.app"
        />{" "}
        <meta property="twitter:title" content="Card Preview" />{" "}
        <meta
          property="twitter:description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />
        <meta
          property="twitter:image"
          content="https://checkpreview.vercel.app/banner.png"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
