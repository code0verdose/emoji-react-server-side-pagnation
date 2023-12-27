import s from './PaginationSelect.module.scss'

export const PaginationSelect = ({ selectValue, onChange }) => {
  const variants = [6, 12, 24, 48];

  return (
    <div className={s.select}>
      <p className={s.select__label}>Per page</p>
      <select className={s.select__chose} onChange={onChange} value={selectValue}>
        {variants.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
