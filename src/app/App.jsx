import { useEffect, useState } from "react";
import { CardsWrapper } from "../layout/CardsWrapper/CardsWrapper";
import { Layout } from "../layout/Layout";
import "./styles/global.css";
import { Card } from "../components/Card/Card";
import { Spinner } from "../ui/Spinner/Spinner";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [limitCards, setLimitCards] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(null);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    setPage(0);
  };

  const limitHandler = (e) => {
    setLimitCards(e.target.value);
    setPage(0);
  };

  const onPageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const res = fetch(
      process.env.REACT_APP_API_URL +
        `?search=${searchValue}&limit=${limitCards}&page=${page}`,
      { signal }
    );
    res
      .then((data) => data.json())
      .then((res) => {
        setData(res.data);
        setLastPage(res.lastPage);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [searchValue, limitCards, page]);

  const cards = data
    .filter(
      (el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.keywords.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((el) => <Card key={el.title} {...el} />);

  return (
    <Layout
      limitHandler={limitHandler}
      limitCards={limitCards}
      currentPage={page}
      lastPage={lastPage}
      onPageChange={onPageChange}
      searchValue={searchValue}
      searchHandler={searchHandler}
    >
      <CardsWrapper content={isLoading ? <Spinner /> : cards} />
    </Layout>
  );
};
