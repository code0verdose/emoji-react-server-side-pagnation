import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = ({
  children,
  limitCards,
  limitHandler,
  searchHandler,
  searchValue,
  onPageChange,
  lastPage,
  currentPage,
}) => {
  return (
    <>
      <Header searchValue={searchValue} searchHandler={searchHandler} />
      <main>{children}</main>
      <Footer
        limitCards={limitCards}
        limitHandler={limitHandler}
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={onPageChange}
      />
    </>
  );
};
