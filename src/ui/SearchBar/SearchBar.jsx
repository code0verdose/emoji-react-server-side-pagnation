import React from "react";
import s from "./SearchBar.module.scss";

export const SearchBar = ({
  placeholder,
  onChange,
  value,
  type,
  className,
}) => {

  const rootClass = [s.input, className];

  return (
    <input
      className={rootClass.join(" ")}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};
