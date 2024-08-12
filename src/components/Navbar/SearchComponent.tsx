"use client";
import React, { useEffect, useState } from "react";
import { Logo, ProfileIcon, SearchIcon } from "../icons/Icons";
import Link from "next/link";

type Props = {};

const SearchComponent = (props: Props) => {
  const [toggleRecentSearch, setToggleRecentSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [recentSearch, setRecentSearch] = useState([
    {
      id: 1,
      name: "Search 1",
      url: "",
    },
    {
      id: 1,
      name: "Search 1",
      url: "",
    },
    {
      id: 1,
      name: "Search 1",
      url: "",
    },
  ]);

  const handleSearch = (search: string) => {
    console.log(search);
  };

  useEffect(() => {
    const recentSearchList = localStorage.getItem("_re_srch");
    if (recentSearchList) {
      setRecentSearch(JSON.parse(recentSearchList));
    }
  }, []);

  return (
    <div className="relative">
      <button
        className="px-4 py-3 hover:bg-hover rounded-lg "
        onClick={() => {
          setToggleRecentSearch(!toggleRecentSearch);
          setSearch("");
        }}
      >
        <SearchIcon className="size-5 " />
      </button>
      {toggleRecentSearch && (
        <div className={`absolute right-0 p-4 rounded-lg shadow-2xl bg-white`}>
          <div className="relative">
            <div
              className="bg-hover absolute p-2 rounded-md ring-1 flex justify-center items-center z-20 top-2 right-3 cursor-pointer"
              onClick={() => handleSearch(search)}
            >
              <SearchIcon className="size-4 relative" />
            </div>
            <input
              type="search"
              className="p-3 pr-12 focus:ring-1 focus:ring-hover relative"
              placeholder="search company"
              value={search}
              autoFocus
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {searchSuggestion.length > 0 ? (
              <>
                <hr className="w-full" />
                <p className="text-gray-400 mt-2">suggestions </p>
                <ul className="max-h-40 overflow-y-auto scroll-smooth">
                  {recentSearch ? (
                    recentSearch.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-950 py-2 hover:bg-hover px-4 rounded-lg cursor-pointer"
                        onClick={() => setSearch("hgsdhg")}
                      >
                        {item.name}
                      </li>
                    ))
                  ) : (
                    <li
                      className="text-gray-950 py-2 hover:bg-hover px-4 rounded-lg cursor-pointer"
                      onClick={() => setSearch("hgsdhg")}
                    >
                      jhgfhghj
                    </li>
                  )}
                </ul>
              </>
            ) : (
              <>
                <hr className="w-full" />
                <p className="text-gray-400 mt-2 select-none">Recent Searches </p>
                <ul className="max-h-40 overflow-y-auto scroll-smooth">
                  {recentSearch ? (
                    recentSearch.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-950 hover:bg-hover"
                        onClick={() => setToggleRecentSearch(false)}
                      >
                        <Link
                          href={item.url}
                          className="w-full py-2 px-4 rounded-lg inline-block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li
                      className="text-gray-950 py-2 hover:bg-hover px-4 rounded-lg cursor-pointer"
                      onClick={() => setSearch("hgsdhg")}
                    >
                      jhgfhghj
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
