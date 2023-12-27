import React from "react";
import s from './Spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={s.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
