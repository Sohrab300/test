import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IN_APP_FEATURES } from "@/Data/QuickLink";
import Image from "next/image";
import Head from "@/Head";

const InAppFeatures = () => {
	return (
		<>
			<Head title={"In App Features"} description={"We offer exciting In App Features for dating, professional networking & events with an extra level of safety and peace of mind."}/>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.1,
						scale: {
							type: "spring",
							damping: 50,
							stiffness: 200,
							restDelta: 0.001,
						},
					}}
					className="overflow-hidden"
				>
					<div className=" py-24">
						<div className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col justify-center items-center py-10">
							<motion.p
								initial={{ scale: 0.8, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
									scale: {
										type: "spring",
										damping: 14,
										stiffness: 100,
										restDelta: 0.001,
									},
								}}
								className="poppins-text text-2xl md:text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C029A8] to-[#F65667]"
							>
								Our Features
							</motion.p>
							<motion.p
								initial={{ y: "-40%", scale: 1.2, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								transition={{
									duration: 0.7,
									ease: [0, 0.71, 0.2, 1.01],
									scale: {
										type: "tween",
										damping: 14,
										stiffness: 100,
										restDelta: 0.001,
									},
								}}
								className="text-center text-[#828282] text-lg"
							>
								We offer exciting features for dating,
								professional networking & events with an extra
								level of safety and peace of mind so no more
								catfishing, just real people looking for real
								connections. Our Mission is to bring people
								together, be a part of their daily lives by
								helping them build lasting relationships in an
								environment of trust & respect and create
								life-long memories along the way.
							</motion.p>
						</div>

						<motion.div className="py-24">
							<motion.p
								initial={{ scale: 1.2, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
									scale: {
										type: "spring",
										damping: 14,
										stiffness: 100,
										restDelta: 0.001,
									},
								}}
								className="text-center text-black font-semibold text-2xl md:text-4xl mb-20"
							>
								IN - APP FEATURES
							</motion.p>
							<motion.div className="grid gap-10 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] mx-auto">
								{IN_APP_FEATURES.map((data, index) => (
									<motion.div
										initial={{
											y: "-40%",
											scale: 1.2,
											opacity: 0,
										}}
										whileHover={{ scale: 1.1 }}
										whileInView={{
											y: 0,
											scale: 1,
											opacity: 1,
										}}
										transition={{
											duration: 0.7,
											ease: [0, 0.71, 0.2, 1.01],
											scale: {
												type: "tween",
												damping: 14,
												stiffness: 100,
												restDelta: 0.001,
											},
										}}
										style={{
											boxShadow: "0px 0px 8px lightgray",
										}}
										key={index}
										className="flex flex-col items-center px-5 py-14 text-center rounded-2xl bg-white"
									>
										<Image
											width={81}
											height={81}
											src={data?.logo}
											alt={data?.title}
											className="w-20 h-20"
										/>
										<motion.p className="text-3xl py-4">
											{data?.title}
										</motion.p>
										<motion.p>{data?.info}</motion.p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>
					<div></div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default InAppFeatures;
