import NextApp, { AppProps, AppContext } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import { MantineProvider, ColorScheme } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Roboto_Slab } from "@next/font/google";
import { AppContextWrapper } from "@/src/context/AppContext";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  setCookie("mantine-color-scheme", "dark", {
    maxAge: 60 * 60 * 24 * 30,
  });

  return (
    <>
      <Head>
        <title>Video Streaming App</title>
        <meta name="description" content="Watch videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContextWrapper>
        <MantineProvider
          theme={{
            colorScheme: "dark",
            fontFamily: robotoSlab.className,
            breakpoints: {
              xs: 640,
              sm: 895,
              md: 960,
              lg: 1088,
              xl: 1280,
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </AppContextWrapper>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
  };
};
