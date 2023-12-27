import { Container } from "../Container/Container";
import s from "./CardsWrapper.module.scss";

export const CardsWrapper = ({ content }) => {
  return (
    <Container>
      <div className={s.grid}>{content}</div>
    </Container>
  );
};
