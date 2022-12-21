import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
// import "../styles/nicepage.css";
// import "../styles/nicepage-site.css";
// import "../styles/main.css";



// document.body.classList.add(
//    'u-body',
//    'u-xl-mode',
//  );

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
