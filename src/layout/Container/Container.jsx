import React from "react";
import s from './Container.module.scss'

export const Container = ({ children, className }) => {

  const rootClass = [s.container, className]

  return <div className={rootClass.join(" ")}>{children}</div>;
};
