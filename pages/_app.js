import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import NavBar from "@/Components/Shared/NavBar";
import Head from "@/Head";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import platform from "platform";
import { createContext, useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { Toaster } from "react-hot-toast";
export const StateContext = createContext();
import Script from "next/script";
import { Provider } from "react-redux";
import store from "@/redux/store";
import PopupChatbot from "@/Components/Chatbot/PopupChatbot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  const [osName, setOsName] = useState("");

  useEffect(() => {
    setOsName(platform.os.family);
  }, []);

  const [pageName, setPageName] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   fbq.pageview();
  //   const handleRouterChange = () => {
  //     fbq.pageview();
  //   };
  //   router.events.on("routeChangeComplete", handleRouterChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouterChange);
  //   };
  // }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-1GDKXS7R5W" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const stateInfo = {
    pageName,
    setPageName,
    osName,
  };
  const [buttonName, setButtonName] = useState("");
  const handleButtonClick = (buttonName) => {
    setButtonName(buttonName);
    // console.log("Hi button clicked!", buttonName);
    window.location.hash = "whatsapp";
    window.open("https://wa.me/+918882207396?text=Hi", "_blank");
    if (window.fbq) {
      window.fbq("track", "Lead-CTA", {
        content_name: buttonName,
      });
    }
  };

  return (
    <>
      <Head />
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1GDKXS7R5W`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1GDKXS7R5W');
          `}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 137039049312449);
          `,
          }}
        />
      </>
      {!loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Provider store={store}>
            <StateContext.Provider value={stateInfo}>
              <Toaster position="top-center" />
              {router.pathname !== "/404" && <NavBar />}
              <Component {...pageProps} />
              {router.pathname !== "/404" && <Footer />}
            </StateContext.Provider>
          </Provider>
          {/*	<button
						id="test"
						onClick={() => handleButtonClick("WhatsAppButton")}
						className="bg-white px-1 py-1 rounded text-white border-2 border-transparent  duration-300 ease-in-out shadow mt-7 manrope font-light"
					>
						<FaWhatsapp className="p-1.5  text-5xl text-[#288a32]" />
						</button>
						  
						<button
						id="test1"
						onClick={() => handleButtonClick1("CallButton")}
						className="bg-white px-1 py-1 rounded text-white border-2 border-transparent  duration-300 ease-in-out shadow mt-7 manrope font-light"
					>
						<FaPhone className="p-2.5  text-5xl text-[#00BFD8]" />
      </button> */}
          <PopupChatbot />
        </>
      )}
    </>
  );
}
