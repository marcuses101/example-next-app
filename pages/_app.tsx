import "mock-service-worker/initMSW";
import { AppProps } from "next/app";
import { GlobalStylesComponent, Header, Toaster } from "core/components";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";

// https://mui.com/customization/how-to-customize/
// recommends hoisting to static variable to avoid rerendering
// the generated <style> tag
const GlobalCustomScrollbar = <GlobalStylesComponent />;

export default function MyApp({ Component, pageProps }: AppProps<{}>) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <>
      {GlobalCustomScrollbar}
      <CssBaseline />
      <Toaster>
        <Header />
        <Component {...pageProps} />
      </Toaster>
    </>
  );
}
