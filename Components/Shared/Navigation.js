import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { StateContext } from "@/pages/_app";

export default function Navigation({ windowHeight }) {
	const { osName } = useContext(StateContext);

	const router = useRouter();
	const navigation = [
		{ name: "Features", href: "/features" },
		{ name: "Subscriptions", href: "/subscription-tires" },
		{ name: "About", href: "/about-us" },
		{ name: "Contact Us", href: "/contact-us" },
	];

	// change url for different page

	useEffect(() => {
    const urls = [
        "/features",
        "/subscription-tires",
        "/about-us",
        "/contact-us",
     ];

    const trackUrl = (url) => {
        const currentUrl = url.replace(/\//g, "");

        if (urls.includes(url)) {
            if (window.fbq) {
                const pathName = currentUrl.split("?")[0];
                const capitalizedPathname = pathName.split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-") + "-Page";
                // console.log(capitalizedPathname);
                window.fbq("track", capitalizedPathname, {
                    content_name: currentUrl,
                    content_category: "URL"
                });
            }
        }
    };
  
    trackUrl(router.pathname);

    router.events.on('routeChangeComplete', trackUrl);
    
    return () => {
       router.events.off('routeChangeComplete', trackUrl)
    };

}, []);

	return (
		<AnimatePresence>
			<nav className="hidden lg:flex lg:flex-[.7] xl:flex-[.6] 2xl:flex-[.5]">
				<ul className="flex flex-1 gap-2 items-center justify-between">
					{navigation?.map((nav) => (
						<motion.li
							key={nav.name}
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.02 }}
							transition={{
								duration: 0.2,
								ease: [0, 0.71, 0.2, 1.01],
								scale: {
									type: "spring",
									damping: 10,
									stiffness: 100,
									restDelta: 0.001,
								},
							}}
							className={`${
								router.asPath.includes(nav.href)
									? "border-bottom-gr"
									: ""
							} ${
								router.pathname === "/" &&
								windowHeight <= 110 &&
								" text-white"
							} ${router.pathname !== "/" && "text-black"}`}
						>
							<Link href={nav.href}>
								<span className="poppins-text">
									{" "}
									{nav.name}
								</span>
							</Link>
						</motion.li>
					))}
					<li>
						<a
							href={
								osName == "Android" || osName == "Windows"
									? "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
									: osName == "iOS" ||
									  osName == "Apple" ||
									  osName == "OS X"
									? "https://apps.apple.com/in/app/minglewise-dating-pro-events/id1574084760"
									: "https://play.google.com/store/apps/details?id=com.appsynergies.minglewise"
							}
							target="_blank"
							onClick={() => {
								window.location.hash = "download-app";
							}}
						>
							<button
								className={`bg-transparent text-white font-bold w-28 h-10 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-md
            hover:bg-white hover:text-black transition-all duration-300 px-4 rounded py-2 poppins-text`}
							>
								Download
							</button>
						</a>
					</li>
				</ul>
			</nav>
		</AnimatePresence>
	);
}
