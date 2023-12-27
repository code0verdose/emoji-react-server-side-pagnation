import { unicalizeStr } from "../../helpers/unicalizeStr";
import s from "./Card.module.scss";

export const Card = ({ title, symbol, keywords }) => {
  return (
    <div className={s.card}>
      <h2 className={s.card__symbol}>{symbol}</h2>
      <p className={s.card__title}>{title}</p>
      <p className={s.card__keywords}>{unicalizeStr(keywords)}</p>
    </div>
  );
};
