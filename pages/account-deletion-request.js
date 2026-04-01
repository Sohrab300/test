import React, { useState } from "react";
import { useRouter } from "next/router";
import TextInput from "@/Components/TextInput";
import PhoneInputField from "@/Components/PhoneInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "@/Head";

function Index() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [selectedReason, setSelectedReason] = useState(null);
	const [additionalReason, setAdditionalReason] = useState("");
	const [showTextarea, setShowTextarea] = useState(false);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const reasons = [
		"No longer using the service",
		"Dissatisfied with the service",
		"Found a better alternative",
		"Not for me",
		"Privacy concerns or misuse of personal information",
		"Others",
	];

	const handleRadioClick = (value) => {
		if (value === "Others") {
			setShowTextarea(true);
		} else {
			setShowTextarea(false);
		}
		setSelectedReason(value);

		setErrors((prevErrors) => ({ ...prevErrors, reason: "" }));
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
		setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
	};

	const handlePhoneChange = (value) => {
		setPhone(value);
		setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
	};

	const validateEmail = (email) => {
		if (email.trim() === "") {
			return true;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};
	const handleAdditionalReasonChange = (e) => {
		setAdditionalReason(e.target.value);

		setErrors((prevErrors) => ({ ...prevErrors, additionalReason: "" }));
	};

	const handleSubmit = async () => {
		const newErrors = {};
		if (!name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!phone.trim()) {
			newErrors.phone = "Phone number is required";
		}
		if (!validateEmail(email.trim())) {
			newErrors.email = "Enter a valid email address";
		}
		if (!selectedReason) {
			newErrors.reason = "Please select a reason for leaving";
		}
		if (selectedReason === "Others" && !additionalReason.trim()) {
			newErrors.additionalReason = "Please provide your reason";
		}
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setLoading(true);

		try {
			const response = await axios.post(
				"https://us-central1-minglewise2019.cloudfunctions.net/RequestAccountDeletionApi/requestDel",
				{
					name: name,
					email: email,
					phone: phone,
					reason:
						selectedReason === "Others"
							? additionalReason
							: selectedReason,
				},
			);
			if (response.status === 200) {
				toast.success(
					"We have received your request to delete the account. Your account will be deleted soon",
					{
						onClose: () => {
							setName("");
							setPhone("");
							setEmail("");
							setSelectedReason(null);
							setAdditionalReason("");
							setErrors({});
							setSubmitted(true);
							router.push("/");
						},
					},
				);
			} else {
				console.error("Error:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Head
				title={"Account Deletion Request"}
				description={
					"Need to delete your account? Minglewise makes it easy and secure. Follow our simple steps to submit an account deletion request and protect your data privacy."
				}
			/>
			<main className="flex flex-col container mx-auto lg:w-[70%] 2xl:w-[50%]  py-8 my-20 lg:px-8 px-2 ">
				<ToastContainer />
				<div className="space-y-12">
					<p className="text-center text-2xl md:text-3xl font-bold">
						Account Deletion Request
					</p>

					<div className=" flex flex-col ">
						<div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16">
							<div className="w-full ">
								<TextInput
									label="1. Your Name"
									placeholder="Enter your name"
									value={name}
									onChange={handleNameChange}
									required
									className={
										"w-full px-3 py-2 border border-gray  rounded-lg shadow-sm  focus:outline-none" +
										(errors.name ? " border-red" : "")
									}
								/>
								{errors.name && (
									<p className="text-red-500">
										{errors.name}
									</p>
								)}
							</div>

							<div className="w-full">
								<PhoneInputField
									label="2. Your Phone Number"
									value={phone}
									onChange={handlePhoneChange}
									required
									className={
										"w-full px-3 py-2 border border-gray  rounded-lg shadow-sm  focus:outline-none" +
										(errors.phone ? " border-red" : "")
									}
								/>
								{errors.phone && (
									<p className="text-red-500">
										{errors.phone}
									</p>
								)}
							</div>
						</div>

						<div className="mt-4 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16">
							<div className="w-full ">
								<TextInput
									label="3.Your Email Address"
									placeholder="Enter Your Email"
									value={email}
									onChange={handleEmailChange}
									className={
										"w-full px-3 py-2 border border-gray  rounded-lg shadow-sm  focus:outline-none" +
										(errors.email ? " border-red" : "")
									}
								/>
								{errors.email && (
									<p className="text-red-500">
										{errors.email}
									</p>
								)}
							</div>

							<div className="w-full "></div>
						</div>

						<div className="custom-radio ">
							<p className="text-lg font-medium text-leftlg:text-left my-4">
								{" "}
								4. Please tell us why you are leaving us!{" "}
								<span className="text-[#E90000]">*</span>
							</p>

							{reasons.map((reason) => (
								<div
									key={reason}
									className="mb-2 flex items-center gap-3 hover:bg-gray-50 p-1"
								>
									<input
										type="radio"
										id={reason}
										name="reason"
										value={reason}
										onChange={() =>
											handleRadioClick(reason)
										}
										className="hidden"
									/>
									<label
										htmlFor={reason}
										className="custom-radio-label"
									>
										<span className="custom-radio-button mr-3"></span>
										<p className="text-base"> {reason}</p>
									</label>
								</div>
							))}
							{errors.reason && (
								<p className="text-red-500">{errors.reason}</p>
							)}

							<div
								className={`mb-4 ${
									showTextarea ? "" : "hidden"
								}`}
							>
								<textarea
									id="additionalReason"
									name="additionalReason"
									rows="4"
									cols="50"
									className="w-full p-2 border-2 border-primary rounded focus:border-gray-200 focus:outline-none"
									placeholder="Please state your reason. It will help us improve."
									value={additionalReason}
									onChange={handleAdditionalReasonChange}
								></textarea>
								{errors.additionalReason && (
									<p className="text-red-500">
										{errors.additionalReason}
									</p>
								)}
							</div>

							<div className="flex items-center justify-center mt-12">
								<button
									className="bg-transparent text-white font-semibold w-44 h-10 relative
                    before:w-full before:h-full before:scale-x-[1.04] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
                    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
                    before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
                    before:rounded-md
                    hover:bg-white hover:text-black duration-300 px-4 rounded py-2 poppins-text"
									onClick={handleSubmit}
									disabled={loading}
								>
									{loading ? "Submitting.." : "Submit"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Index;
