import { Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const parseMessage = (text) => {
	// console.log(text);
	const urlRegex = /\((https?:\/\/[^\s]+)\)/g;
	const bracketRegex = /\[([^\]]+)\]/g;
	const boldRegex = /\*\*(.*?)\*\*/g;
	const hashBoldRegex = /^###\s*(.*)/gm;

	let parts = [];
	let lastIndex = 0;

	text = text.replace(bracketRegex, "");

	let lines = text.split("\n");

	lines.forEach((line, lineIndex) => {
		lastIndex = 0;

		let boldParts = [];
		line.replace(boldRegex, (match, boldText, offset) => {
			if (offset > lastIndex) {
				boldParts.push(line.slice(lastIndex, offset));
			}

			boldParts.push(<strong key={`bold-${offset}`}>{boldText}</strong>);
			lastIndex = offset + match.length;
			return match;
		});

		line = line.replace(hashBoldRegex, (match, boldText, offset) => {
			if (offset > lastIndex) {
				boldParts.push(line.slice(lastIndex, offset));
			}

			boldParts.push(
				<strong key={`hashbold-${offset}`}>{boldText.trim()}</strong>,
			); // trim spaces
			lastIndex = offset + match.length;
			return match;
		});

		if (lastIndex < line.length) {
			boldParts.push(line.slice(lastIndex));
		}

		boldParts.forEach((segment, segmentIndex) => {
			if (typeof segment === "string") {
				let urlLastIndex = 0;

				segment.replace(urlRegex, (match, url, offset) => {
					if (offset > urlLastIndex) {
						parts.push(segment.slice(urlLastIndex, offset));
					}

					parts.push(
						<a
							key={`url-${offset}`}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#d93e8a] underline"
						>
							{url.replace(/https?:\/\//, "")}
						</a>,
					);
					urlLastIndex = offset + match.length;
					return match;
				});

				if (urlLastIndex < segment.length) {
					parts.push(segment.slice(urlLastIndex));
				}
			} else {
				parts.push(segment);
			}
		});

		if (lineIndex < lines.length - 1) {
			parts.push(<br key={`br-${lineIndex}`} />);
		}
	});

	return parts;
};

const Chatbot = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!input.trim()) return;

		const userMessage = { text: input, sender: "user" };
		setMessages((prevMessages) => [...prevMessages, userMessage]);
		setInput("");

		setIsLoading(true);

		try {
			const response = await fetch(
				"https://mwchatbot-316217858377.us-central1.run.app/chat",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ prompt: input }),
				},
			);
			const data = await response.json();

			const botMessage = { text: data.response, sender: "bot" };
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		} catch (error) {
			const errorMessage = {
				text: "Sorry, there was an error. Please try again.",
				sender: "bot",
			};
			setMessages((prevMessages) => [...prevMessages, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className="flex flex-col lg:h-96 h-[60vh] overflow-hidden ">
			<div className="flex-1 overflow-auto">
				{messages.length === 0 && (
					<div className="flex flex-col space-y-2 items-center justify-center h-full bg-gray-100">
						<img src="/chat.png" className="w-16 h-16" />
						<h1 className="text-gray-400 text-xl pt-3">
							You are all set!
						</h1>
						<p className="text-gray-400 text-sm">
							Ask your first question to get started
						</p>
					</div>
				)}
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`flex items-start mb-4 mt-4 px-2 ${
							msg.sender === "user"
								? "justify-end "
								: "justify-start"
						}`}
					>
						{msg.sender === "bot" && (
							<div className="bg-white rounded-full border mx-2">
								<img
									className="cursor-pointer"
									width={40}
									height={40}
									src="/assets/logo/mingle.webp"
									alt="logo"
								/>
							</div>
						)}
						<div
							className={`py-1 px-4 rounded-lg max-w-xs ${
								msg.sender === "user"
									? "bg-[#fce1f963] text-gray-900 rounded"
									: "bg-[#fce1f963] text-gray-700 rounded"
							}`}
						>
							<h4 className="font-semibold mb-0.5 text-md text-gray-500">
								{msg.sender === "user" ? "You" : "MW Bot"}
							</h4>
							<div className="text-sm">
								{msg.sender === "bot"
									? parseMessage(msg.text)
									: msg.text}
							</div>
						</div>
						{msg.sender === "user" && (
							<img
								src="/user.svg"
								alt="User Avatar"
								className="w-10 h-10 ml-2 rounded-full"
							/>
						)}
					</div>
				))}

				{isLoading && (
					<div className="my-2 flex items-center ml-4">
						<img
							className="cursor-pointer border rounded-full"
							width={40}
							height={40}
							src="/assets/logo/mingle.webp"
							alt="logo"
						/>
						<div className="flex rounded-full ml-5">
							<div className="dots"></div>
						</div>
					</div>
				)}
				<div ref={messagesEndRef} />
			</div>
			<form
				className="flex items-center p-2 bg-gray-200 lg:w-full"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					className="lg:flex-1 flex-wrap px-4 py-2 bg-white rounded-l-lg focus:outline-none w-full"
					placeholder="Enter your question..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-white px-3 py-1 rounded-r-lg focus:outline-none"
				>
					<Send color="#8800e1" className="h-8" />
				</button>
			</form>
		</div>
	);
};

export default Chatbot;
