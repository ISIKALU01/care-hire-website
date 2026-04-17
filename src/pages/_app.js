import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/Layout";
import BackToTop from "@/components/backtotop";
import Loader from "@/components/loader";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const delayTimeout = useRef(null);
  const minDisplayTimeout = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      // Delay before showing loader (prevents flash on fast routes)
      delayTimeout.current = setTimeout(() => {
        setLoading(true);

        // Ensure loader stays visible for at least 400ms
        minDisplayTimeout.current = setTimeout(() => {}, 400);
      }, 200);
    };

    const handleComplete = () => {
      clearTimeout(delayTimeout.current);

      // Wait for minimum display time before hiding
      if (minDisplayTimeout.current) {
        setTimeout(() => {
          setLoading(false);
        }, 400);
      } else {
        setLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(delayTimeout.current);
      clearTimeout(minDisplayTimeout.current);

      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={raleway.className}>
      {loading && <Loader />}

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <BackToTop />
    </div>
  );
}