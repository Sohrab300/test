import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Chatbot from "./Chatbot";
import { X } from "lucide-react";
import WhiteBackgroundLogo from "../Shared/WhiteBackgroundLogo";

const PopupChatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const chatbotRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				chatbotRef.current &&
				!chatbotRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const toggleChatbot = () => {
		setIsOpen(!isOpen);
		setIsVisible(false);
	};

	return (
		<div>
			<button
				onClick={toggleChatbot}
				className="fixed bottom-12 right-10 bg-white rounded-full shadow-md shadow-[#fb775f]"
			>
				<Image
					src="/robot.gif"
					className="w-16 h-16 rounded-full"
					alt="Chatbot"
					width={64}
					height={64}
					unoptimized
				/>
			</button>

			{isOpen && (
				<div
					ref={chatbotRef}
					className="fixed bottom-4 lg:right-5 lg:w-[480px] w-full bg-white px-2  lg:px-0 shadow-lg rounded-lg overflow-hidden chatbot-z"
				>
					<div className="bg-[#8800e1] text-white p-4 flex items-center justify-between space-x-4">
						<div className="flex items-center space-x-4 ">
							<div className="bg-white rounded-full shadow-lg drop-shadow-lg">
								<Image
									className="cursor-pointer"
									width={40}
									height={40}
									src="/assets/logo/mingle.webp"
									alt="logo"
									unoptimized
								/>
							</div>
							<h2 className="text-lg font-semibold text-primary">
								MW Bot
							</h2>
						</div>
						<button
							onClick={toggleChatbot}
							className="text-white text-lg font-semibold"
						>
							<X color="white" />
						</button>
					</div>
					<Chatbot />
				</div>
			)}
		</div>
	);
};

export default PopupChatbot;
