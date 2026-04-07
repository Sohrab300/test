import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳", iso: "IN" },
  { name: "United States", code: "+1", flag: "🇺🇸", iso: "US" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "GB" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", iso: "AE" },
  { name: "Australia", code: "+61", flag: "🇦🇺", iso: "AU" },
  { name: "Canada", code: "+1", flag: "🇨🇦", iso: "CA" },
  { name: "Germany", code: "+49", flag: "🇩🇪", iso: "DE" },
  { name: "France", code: "+33", flag: "🇫🇷", iso: "FR" },
  { name: "Italy", code: "+39", flag: "🇮🇹", iso: "IT" },
  { name: "Spain", code: "+34", flag: "🇪🇸", iso: "ES" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", iso: "NL" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭", iso: "CH" },
  { name: "Sweden", code: "+46", flag: "🇸🇪", iso: "SE" },
  { name: "Norway", code: "+47", flag: "🇳🇴", iso: "NO" },
  { name: "Denmark", code: "+45", flag: "🇩🇰", iso: "DK" },
  { name: "Finland", code: "+358", flag: "🇫🇮", iso: "FI" },
  { name: "Ireland", code: "+353", flag: "🇮🇪", iso: "IE" },
  { name: "Belgium", code: "+32", flag: "🇧🇪", iso: "BE" },
  { name: "Austria", code: "+43", flag: "🇦🇹", iso: "AT" },
  { name: "Portugal", code: "+351", flag: "🇵🇹", iso: "PT" },
  { name: "Poland", code: "+48", flag: "🇵🇱", iso: "PL" },
  { name: "Greece", code: "+30", flag: "🇬🇷", iso: "GR" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", iso: "TR" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", iso: "SA" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", iso: "QA" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", iso: "KW" },
  { name: "South Africa", code: "+27", flag: "🇿🇦", iso: "ZA" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬", iso: "NG" },
  { name: "Egypt", code: "+20", flag: "🇪🇬", iso: "EG" },
  { name: "Kenya", code: "+254", flag: "🇰🇪", iso: "KE" },
  { name: "Brazil", code: "+55", flag: "🇧🇷", iso: "BR" },
  { name: "Argentina", code: "+54", flag: "🇦🇷", iso: "AR" },
  { name: "Chile", code: "+56", flag: "🇨🇱", iso: "CL" },
  { name: "Mexico", code: "+52", flag: "🇲🇽", iso: "MX" },
  { name: "Colombia", code: "+57", flag: "🇨🇴", iso: "CO" },
  { name: "Peru", code: "+51", flag: "🇵🇪", iso: "PE" },
  { name: "China", code: "+86", flag: "🇨🇳", iso: "CN" },
  { name: "Japan", code: "+81", flag: "🇯🇵", iso: "JP" },
  { name: "South Korea", code: "+82", flag: "🇰🇷", iso: "KR" },
  { name: "Singapore", code: "+65", flag: "🇸🇬", iso: "SG" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾", iso: "MY" },
  { name: "Thailand", code: "+66", flag: "🇹🇭", iso: "TH" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", iso: "ID" },
  { name: "Philippines", code: "+63", flag: "🇵🇭", iso: "PH" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳", iso: "VN" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿", iso: "NZ" },
].sort((a, b) => a.name.localeCompare(b.name));

const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

const ErrorMessage = ({ message }) => (
  <p className="text-red-500 text-xs mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
    {message}
  </p>
);

const InputCard = ({ label, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 border border-gray-100">
    <label className="block text-gray-700 font-semibold mb-4">{label}</label>
    {children}
  </div>
);

const RadioOption = ({ name, label, value, onChange, checked }) => (
  <label className="flex items-center space-x-3 mb-3 cursor-pointer group">
    <input
      type="radio"
      name={name}
      value={value || label}
      onChange={onChange}
      checked={checked}
      required
      className="form-radio h-5 w-5 text-pink-600 border-gray-300 focus:ring-blue-500"
    />
    <span className="text-gray-600 group-hover:text-black transition-colors">
      {label}
    </span>
  </label>
);

const FormBody = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  // Form State - ALL text inputs are tracked here
  const initialFormData = {
    userName: "",
    phoneNumber: "",
    venueName: "",
    city: "",
    address: "",
    pincode: "",
    googleMapsLink: "",
    photosVideosLink: "",
    additionalNotes: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // Radio states
  const [venueType, setVenueType] = useState("");
  const [otherVenueType, setOtherVenueType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [availability, setAvailability] = useState("");
  const [ownership, setOwnership] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
    setVenueType("");
    setOtherVenueType("");
    setCapacity("");
    setSpaceType("");
    setAvailability("");
    setOwnership("");
    setIsAgreed(false);
    setShowErrors(false);
  };

  // Phone Picker States
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find((c) => c.iso === "IN") || COUNTRIES[0],
  );
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Numeric restriction for specific fields
    if (name === "phoneNumber" || name === "pincode") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);

    const isGoogleMapsLinkValid = URL_REGEX.test(formData.googleMapsLink);
    const isPhotosVideosLinkValid = URL_REGEX.test(formData.photosVideosLink);

    // Check if all required fields are filled
    const isFormValid =
      formData.userName &&
      formData.phoneNumber &&
      formData.venueName &&
      formData.city &&
      formData.address &&
      formData.pincode &&
      formData.googleMapsLink &&
      isGoogleMapsLinkValid &&
      (venueType === "Other" ? otherVenueType.trim() : venueType) &&
      capacity &&
      spaceType &&
      formData.photosVideosLink &&
      isPhotosVideosLinkValid &&
      availability &&
      ownership &&
      isAgreed;

    if (!isFormValid) {
      // Scroll to the first error after the state update re-renders the component
      setTimeout(() => {
        const firstError = document.querySelector(
          ".border-red-500, .bg-red-50",
        );
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return;
    }

    setIsLoading(true);

    // 2. Prepare Detailed Payload
    const payload = {
      // Basic Info
      userName: formData.userName,
      countryCode: selectedCountry.code,
      phoneNumber: formData.phoneNumber,
      fullPhoneNumber: `${selectedCountry.code}${formData.phoneNumber}`,

      // Venue Location
      venueName: formData.venueName,
      city: formData.city,
      address: formData.address,
      pincode: formData.pincode,
      googleMapsLink: formData.googleMapsLink,

      // Venue Details
      venueType: venueType === "Other" ? otherVenueType : venueType,
      capacity: capacity,
      spaceType: spaceType,
      photosVideosLink: formData.photosVideosLink,

      // Logistics
      availability: availability,
      ownership: ownership,
      additionalNotes: formData.additionalNotes,

      // Metadata
      submittedAt: new Date().toISOString(),
      source: "Website Form",
    };

    try {
      const response = await fetch(
        "https://n8n.srv1028016.hstgr.cloud/webhook/AS/Agentic/Funnel/Website-Form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsSubmitted(true);
        resetForm();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const getInputClassName = (value, isValid = true) => {
    const base =
      "w-full bg-gray-50 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none border transition-colors";
    const errorBorder =
      showErrors && (!value || !isValid)
        ? "border-red-500"
        : "border-transparent";
    return `${base} ${errorBorder}`;
  };

  return (
    <div className="min-h-screen font-sans">
      {/* 2. FORM CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Become our Community Hub
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe the best ideas, activities, and experiences happen when
            people come together around shared interests. To make this possible
            at scale, we&apos;re building a network of Community Hubs — spaces
            where people can gather, learn, create, and engage in meaningful
            activities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you have a venue that can host activities and bring people
            together, we&apos;d love to partner with you. Share your space with
            us and become part of a growing ecosystem that enables communities
            to connect and thrive.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <InputCard
            label={
              <>
                Your Name <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="Your answer"
              className={getInputClassName(formData.userName)}
            />
            {showErrors && !formData.userName && (
              <ErrorMessage message="This field is required" />
            )}
          </InputCard>

          {/* Contact Number */}
          <InputCard
            label={
              <>
                Your Contact Number <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`flex items-center bg-gray-50 rounded-lg p-1 relative border transition-colors ${
                showErrors && !formData.phoneNumber
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              ref={pickerRef}
            >
              <button
                type="button"
                onClick={() => setIsPickerOpen(!isPickerOpen)}
                className="flex items-center gap-2 px-3 py-2 border-r border-gray-300 hover:bg-gray-100 rounded-l-lg transition-colors"
              >
                <span className="text-xl">{selectedCountry.flag}</span>
                <span className="text-gray-700 font-medium">
                  {selectedCountry.code}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${isPickerOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isPickerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 shadow-2xl rounded-xl z-50 overflow-hidden"
                  >
                    <div className="p-3 border-b border-gray-100 sticky top-0 bg-white">
                      <div className="relative">
                        <Search
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <input
                          autoFocus
                          type="text"
                          placeholder="Search country..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.iso + country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsPickerOpen(false);
                              setSearchQuery("");
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-pink-50 transition-colors text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span>{country.flag}</span>
                              <span className="text-sm text-gray-700">
                                {country.name}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-400">
                              {country.code}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500 text-sm">
                          No country found
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <input
                required
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your answer"
                className="w-full bg-transparent border-none p-3 focus:ring-0 outline-none"
              />
            </div>
            {showErrors && !formData.phoneNumber && (
              <ErrorMessage message="This field is required" />
            )}
          </InputCard>

          {/* Venue Name */}
          <InputCard
            label={
              <>
                Venue name/Business name <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="text"
              name="venueName"
              value={formData.venueName}
              onChange={handleInputChange}
              placeholder="Your answer"
              className={getInputClassName(formData.venueName)}
            />
            {showErrors && !formData.venueName && (
              <ErrorMessage message="This field is required" />
            )}
          </InputCard>

          {/* City */}
          <InputCard
            label={
              <>
                Please mention the city where your venue is located in.{" "}
                <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Your answer"
              className={getInputClassName(formData.city)}
            />
            {showErrors && !formData.city && (
              <ErrorMessage message="This field is required" />
            )}
          </InputCard>

          {/* Address & Pincode */}
          <InputCard
            label={
              <>
                Please mention your venue address{" "}
                <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Full Address"
              className={getInputClassName(formData.address) + " mb-4"}
            />
            {showErrors && !formData.address && (
              <ErrorMessage message="Full address is required" />
            )}
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-gray-700 font-semibold">
                Pincode <span className="text-red-500">*</span>
              </span>
              <div className="w-1/3">
                <input
                  required
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={getInputClassName(formData.pincode)}
                />
              </div>
            </div>
            {showErrors && !formData.pincode && (
              <ErrorMessage message="Pincode is required" />
            )}
          </InputCard>

          {/* Google Maps Link */}
          <InputCard
            label={
              <>
                Paste Google Maps link to your venue{" "}
                <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="url"
              name="googleMapsLink"
              value={formData.googleMapsLink}
              onChange={handleInputChange}
              placeholder="https://maps.google.com/..."
              className={getInputClassName(
                formData.googleMapsLink,
                URL_REGEX.test(formData.googleMapsLink),
              )}
            />
            {showErrors && !formData.googleMapsLink && (
              <ErrorMessage message="This field is required" />
            )}
            {showErrors &&
              formData.googleMapsLink &&
              !URL_REGEX.test(formData.googleMapsLink) && (
                <ErrorMessage message="Please enter a valid URL (e.g., https://...)" />
              )}
          </InputCard>

          {/* Venue Type */}
          <InputCard
            label={
              <>
                Venue Type <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`space-y-1 p-2 rounded-xl transition-colors ${showErrors && !venueType ? "bg-red-50" : ""}`}
            >
              {[
                "Cafes",
                "Sports facilities/arena",
                "Dance studio",
                "Music studio",
                "I have a space and I want to transform it into an activity arena",
                "Theatre studio",
                "Club/Bar",
                "Restaurant",
                "Cafe Chain",
                "Restaurant Chain",
                "Co-working space",
                "Co-living space/Hotel/Hostel",
              ].map((opt) => (
                <RadioOption
                  key={opt}
                  name="venueType"
                  label={opt}
                  value={opt}
                  onChange={(e) => setVenueType(e.target.value)}
                  checked={venueType === opt}
                />
              ))}

              {/* Other Option */}
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="venueType"
                  value="Other"
                  checked={venueType === "Other"}
                  onChange={(e) => setVenueType(e.target.value)}
                  className="h-5 w-5 text-pink-600"
                  required
                />
                <span className="text-gray-600">Other:</span>
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherVenueType}
                  onChange={(e) => {
                    setOtherVenueType(e.target.value);
                    setVenueType("Other");
                  }}
                  className={`border-b focus:border-blue-500 outline-none flex-1 ${
                    showErrors && venueType === "Other" && !otherVenueType
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  required={venueType === "Other"}
                />
              </div>
            </div>
            {showErrors && !venueType && (
              <ErrorMessage message="Please select a venue type" />
            )}
            {showErrors && venueType === "Other" && !otherVenueType && (
              <ErrorMessage message="Please specify your venue type" />
            )}
          </InputCard>

          {/* Capacity */}
          <InputCard
            label={
              <>
                Please specify the venue&apos;s capacity (in terms of people it
                can accommodate) <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`space-y-1 p-2 rounded-xl transition-colors ${showErrors && !capacity ? "bg-red-50" : ""}`}
            >
              {[
                "Up to 10",
                "10 - 20 people",
                "20 - 30 people",
                "30 - 50 people",
                "50 - 100 people",
                "100+",
              ].map((opt) => (
                <RadioOption
                  key={opt}
                  name="capacity"
                  label={opt}
                  value={opt}
                  onChange={(e) => setCapacity(e.target.value)}
                  checked={capacity === opt}
                />
              ))}
            </div>
            {showErrors && !capacity && (
              <ErrorMessage message="Please select capacity" />
            )}
          </InputCard>

          {/* Indoor / Outdoor */}
          <InputCard
            label={
              <>
                Indoor / Outdoor Space <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`space-y-1 p-2 rounded-xl transition-colors ${showErrors && !spaceType ? "bg-red-50" : ""}`}
            >
              {["Indoor", "Outdoor", "Both"].map((opt) => (
                <RadioOption
                  key={opt}
                  name="spaceType"
                  label={opt}
                  value={opt}
                  onChange={(e) => setSpaceType(e.target.value)}
                  checked={spaceType === opt}
                />
              ))}
            </div>
            {showErrors && !spaceType && (
              <ErrorMessage message="Please select space type" />
            )}
          </InputCard>

          {/* Photos/Videos link */}
          <InputCard
            label={
              <>
                Please share the link with photos/videos of your venue{" "}
                <span className="text-red-500">*</span>
              </>
            }
          >
            <input
              required
              type="url"
              name="photosVideosLink"
              value={formData.photosVideosLink}
              onChange={handleInputChange}
              placeholder="https://example.com/photos"
              className={getInputClassName(
                formData.photosVideosLink,
                URL_REGEX.test(formData.photosVideosLink),
              )}
            />
            {showErrors && !formData.photosVideosLink && (
              <ErrorMessage message="This field is required" />
            )}
            {showErrors &&
              formData.photosVideosLink &&
              !URL_REGEX.test(formData.photosVideosLink) && (
                <ErrorMessage message="Please enter a valid URL (e.g., https://...)" />
              )}
          </InputCard>

          {/* Availability */}
          <InputCard
            label={
              <>
                When is your venue usually available for activities?{" "}
                <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`space-y-1 p-2 rounded-xl transition-colors ${showErrors && !availability ? "bg-red-50" : ""}`}
            >
              {["Weekdays", "Weekends", "Both", "Depends on booking"].map(
                (opt) => (
                  <RadioOption
                    key={opt}
                    name="availability"
                    label={opt}
                    value={opt}
                    onChange={(e) => setAvailability(e.target.value)}
                    checked={availability === opt}
                  />
                ),
              )}
            </div>
            {showErrors && !availability && (
              <ErrorMessage message="Please select availability" />
            )}
          </InputCard>

          {/* Ownership */}
          <InputCard
            label={
              <>
                Do you own the venue? <span className="text-red-500">*</span>
              </>
            }
          >
            <div
              className={`space-y-1 p-2 rounded-xl transition-colors ${showErrors && !ownership ? "bg-red-50" : ""}`}
            >
              {["Yes", "No", "I manage it"].map((opt) => (
                <RadioOption
                  key={opt}
                  name="ownership"
                  label={opt}
                  value={opt}
                  onChange={(e) => setOwnership(e.target.value)}
                  checked={ownership === opt}
                />
              ))}
            </div>
            {showErrors && !ownership && (
              <ErrorMessage message="Please select ownership status" />
            )}
          </InputCard>

          {/* Additional Notes */}
          <InputCard label="Additional notes or details about your venue">
            <textarea
              rows="4"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Your answer"
              className="w-full bg-gray-50 border-none rounded-lg p-3 outline-none"
            />
          </InputCard>

          {/* Confirmation */}
          <div
            className={`flex items-center space-x-3 py-4 px-2 rounded-xl transition-colors ${showErrors && !isAgreed ? "bg-red-50" : ""}`}
          >
            <input
              type="checkbox"
              required
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-blue-500"
            />
            <span className="text-gray-700 text-sm">
              I confirm the information provided is accurate.{" "}
              <span className="text-red-500">*</span>
            </span>
          </div>
          {showErrors && !isAgreed && (
            <ErrorMessage message="Please confirm that the information is accurate" />
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-lg hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-10 max-w-sm w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/venue-partner/Form-Submitted.svg"
                  alt="Success"
                  width={80}
                  height={80}
                  unoptimized
                  className="w-20 h-20 mb-6"
                />
                <p className="text-gray-700 font-medium">
                  Thank you for submitting the form to verify the venue details.
                  We will get back to you shortly.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormBody;
