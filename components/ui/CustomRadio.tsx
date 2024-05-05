import React from "react";

interface RadioProps {
  checked: boolean | null;
  onChange: (checked: boolean) => void;
  setChecked: React.Dispatch<React.SetStateAction<boolean | null>>;
  selected: boolean;
}

const CustomRadio: React.FC<RadioProps> = ({
  checked,
  onChange,
  setChecked,
  selected,
}) => {
  const handleChange = () => {
    setChecked(selected);
    onChange(selected);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <div
        onClick={handleChange}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid #60269E",
          backgroundColor:
            checked && checked !== null ? "#60269E" : "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && checked !== null && (
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
