import {
  ITEMS_PER_PAGE_MEDIUM,
  ITEMS_PER_PAGE_SMALL,
} from "../utils/constants";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { changePage, changePerPage, searchFor } from "../redux/search/search";
import { useEffect } from "react";

function PageCountSelect() {
  const { perPage } = useSelector((state: RootState) => state.search);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPerPage = window.localStorage.getItem("perPage");
      if (savedPerPage) {
        dispatch(changePerPage(Number(savedPerPage)));
      }
    }
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePerPage(Number(e.target.value)));
    window.localStorage.setItem("perPage", e.target.value);
    dispatch(changePage(1));
    router.push("/");
  };

  return (
    <div className="w-28 h-20 gap-2 flex flex-col justify-end">
      <label
        htmlFor="per_page"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Items per page
      </label>
      <select
        id="per_page"
        data-testid="per_page"
        className="w-full h-12 bg-gray-50/50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 backdrop-blur-lg"
        value={perPage}
        onChange={handleChange}
      >
        <option value={ITEMS_PER_PAGE_SMALL}>{ITEMS_PER_PAGE_SMALL}</option>
        <option value={ITEMS_PER_PAGE_MEDIUM}>{ITEMS_PER_PAGE_MEDIUM}</option>
      </select>
    </div>
  );
}

export default PageCountSelect;
