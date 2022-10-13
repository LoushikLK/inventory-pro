import dayjs from "dayjs";
import "dayjs/locale/en-in"; // import locale
import isLeapYear from "dayjs/plugin/isLeapYear"; // import plugin
import localizedFormat from "dayjs/plugin/localizedFormat"; // import plugin
import relativeTime from "dayjs/plugin/relativeTime"; // import plugin

import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import { MaterialThemeProvider } from "utils";
import "../styles/globals.css";
import "../styles/nProgress.css";

function MyApp({ Component, pageProps }: AppProps) {
  //dayjs config
  dayjs.extend(isLeapYear); // use plugin
  dayjs.extend(relativeTime);
  dayjs.extend(localizedFormat);
  dayjs.locale("en-in"); // use locale

  //nProgress config
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return (
    <MaterialThemeProvider>
      <Component {...pageProps} />
    </MaterialThemeProvider>
  );
}

export default MyApp;
