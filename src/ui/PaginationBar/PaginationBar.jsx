import s from './PaginationBar.module.scss'

export const PaginationBar = ({ currentPage, lastPage, onPageChange }) => {
  
  const renderPageButtons = (currentPage, lastPage) => {
    const arrPages = [];
    const maxButtonsToShow = 5;

    let startPage = Math.max(0, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(lastPage, startPage + maxButtonsToShow - 1);

    if (endPage - startPage < maxButtonsToShow - 1) {
      startPage = Math.max(0, endPage - maxButtonsToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      arrPages.push(i);
    }

    return arrPages.map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`${s.button} ${currentPage === page ? s.active : ""}`}
      >
        {page + 1}
      </button>
    ));
  };

  return (
    <div>
      <button
        disabled={currentPage === 0}
        className={s.button}
        onClick={() => onPageChange(0)}
      >
        First
      </button>

      {renderPageButtons(currentPage, lastPage)}

      <button
        disabled={currentPage === lastPage}
        className={s.button}
        onClick={() => onPageChange(lastPage)}
      >
        Last
      </button>
    </div>
  );
};
