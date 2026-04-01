import React from "react";

const TextInput = ({ label, placeholder, value, onChange, required ,className}) => {
	return (
		<div>
			<label className="block text-primary text-lg font-medium mb-2">
				{label} {required && <span className="text-[#E90000]">*</span>} {!required &&  <span className="text-[#808080] font-normal text-sm">(optional)</span>}
			</label>
			<input
				type="text"
				className={className}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
            />
            
          
		</div>
	);
};

export default TextInput;
