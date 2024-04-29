import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Lead from '@/components/common/Lead';
import SmoothScroll from "@/components/common/SmoothScroll";
import Dust from "@/components/common/Dust";
import MouseFollower from "@/components/common/MouseFollower";
import Nav from "@/components/nav/Nav";
export default function App({ Component, pageProps }: AppProps) {

  const [isDesktop, setisDesktop] = useState(true);

  const DEBOUNCE_TIME = 100;
  let timer: any = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };
  return (
    <>
    <div className=" bg-primary ">
    <MouseFollower isDesktop={isDesktop} />
     <Nav/>
      <Component {...pageProps} />
      <Lead />
      <SmoothScroll />
      <Dust />
    </div>
    </>
  );
}
