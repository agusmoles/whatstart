import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
      />
      <Script id="gtag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ENG}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(MyApp);
