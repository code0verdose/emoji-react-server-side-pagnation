import React from "react";
import s from "./Footer.module.scss";
import { PaginationBar } from "../../ui/PaginationBar/PaginationBar";
import { Container } from "../../layout/Container/Container";
import { PaginationSelect } from "../../ui/PaginationSelect/PaginationSelect";

export const Footer = ({
  onPageChange,
  currentPage,
  lastPage,
  limitCards,
  limitHandler,
}) => {
  return (
    <footer className={s.footer}>
      <Container className={s.footer__wrapper}>
        <PaginationBar
          onPageChange={onPageChange}
          currentPage={currentPage}
          lastPage={lastPage}
        />
        <PaginationSelect selectValue={limitCards} onChange={limitHandler} />
      </Container>
    </footer>
  );
};
