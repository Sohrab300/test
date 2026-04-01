import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ label, value, onChange, required ,className}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    if (!value) {
      setShowPlaceholder(true);
    }
  };

  return (
    <div>
      <label className="block text-primary text-lg font-medium mb-2">
        {label} {required && <span className="text-[#E90000]">*</span>}
      </label>
      {showPlaceholder ? (
        <input
          type="text"
          className={className}
          placeholder="Enter Your Phone Number"
          onFocus={handleFocus}
        />
      ) : (
        <PhoneInput
          country={"in"}
          value={value}
          onChange={onChange}
          inputProps={{
            className:
              "w-full px-12 py-2 border border-gray rounded-lg shadow-sm focus:outline-none",
            onBlur: handleBlur,
          }}
        />
      )}
    </div>
  );
};

export default PhoneInputField;
