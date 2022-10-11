import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import "../styles/globals.css";
import "../styles/nProgress.css";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return <Component {...pageProps} />;
}

export default MyApp;
