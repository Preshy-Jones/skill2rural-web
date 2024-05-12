import React from "react";

interface RadioProps {
  checked: boolean | null;
  onChange: (selected: number | null) => void;
  setSelectedOption: (value: number | null) => void;
  index: number | null;
}

const CustomRadio: React.FC<RadioProps> = ({
  checked,
  onChange,
  setSelectedOption,
  index,
}) => {
  const handleChange = () => {
    setSelectedOption(index);
    onChange(index);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <div
        onClick={handleChange}
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "2px solid #7F56D9",
          backgroundColor: checked ? "#7F56D9" : "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: "14px", height: "14px", fill: "#ffffff" }}
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
      {/* <span style={{ marginLeft: "8px" }}>Option</span> */}
    </div>
  );
};

export default CustomRadio;
