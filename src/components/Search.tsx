import React, { useEffect } from "react";
// import { useSearchParams } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { changePage, searchFor } from "../redux/search/search";
import { useRouter } from "next/router";

function Search() {
  // const [searchParams] = useSearchParams();
  const { searchTerm } = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    if (page) {
      dispatch(changePage(Number(page)));
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSearch = window.localStorage.getItem("searchTerm");
      if (savedSearch) {
        dispatch(searchFor(savedSearch));
      }
    }
  }, [dispatch]);

  // Search results
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchTermInput = (e.target as HTMLFormElement).elements.namedItem(
      "searchTerm"
    ) as HTMLInputElement;
    const searchTerm = searchTermInput.value;

    // Reset all search params for new search
    // const updatedSearchParams = new URLSearchParams(searchParams);
    // updatedSearchParams.set("page", "1");
    // updatedSearchParams.set("details", "0");
    // updatedSearchParams.delete("page");
    // updatedSearchParams.delete("details");

    window.localStorage.setItem("searchTerm", searchTerm);

    // onPageChange(1);
    dispatch(changePage(1));
    dispatch(searchFor(searchTerm));
    router.push(`/`);
    // router.push(`/?${updatedSearchParams.toString()}`);
  };

  return (
    <div className="grow">
      <form onSubmit={handleSearch} role="search">
        <SearchBar searchTerm={searchTerm} />
      </form>
    </div>
  );
}

export default Search;
