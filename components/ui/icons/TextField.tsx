import React from "react";

const TextField = ({
  className,
  placeholder,
  type,
  ...rest
}: {
  className: string;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextField;
