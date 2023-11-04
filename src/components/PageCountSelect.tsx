import { useState } from 'react';

function PageCountSelect({ perPage, onSelect }) {
  return (
    <div className="w-28 h-20">
      <label
        htmlFor="per_page"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Items per page
      </label>
      <select
        id="per_page"
        className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={perPage}
        onChange={onSelect}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default PageCountSelect;
