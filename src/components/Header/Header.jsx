import React from "react";
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import s from "./Header.module.scss";

export const Header = ({searchHandler, searchValue}) => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>Emoji Finder</h1>
      <p className={s.header__subtitle}>Find emoji by keywords</p>
      <SearchBar
        placeholder="Search..."
        type="text"
        className={s.header__search}
        onChange={searchHandler}
        value={searchValue}
      />
    </header>
  );
};
