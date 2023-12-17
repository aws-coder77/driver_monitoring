import React, { useState } from "react";

function Search({ onChangeSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
    onChangeSearch(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <input
          type="text"
          className="border border-slate-800 p-2 rounded-md text-lg bg-white text-black m-2 md:m-4 lg:m-8"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchText}
        />
      </div>
    </div>
  );
}

export default Search;
