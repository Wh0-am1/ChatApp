import { useState, useRef } from "react";
import Search from "../Icons/Search";
import Back from "../Icons/Back";

function SearchBar() {
  const [Scale, setScale] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  function searchHandler() {
    inputRef.current?.focus();
    setScale(true);
  }
  function BackHandler() {
    inputRef.current?.blur();
    setScale(false);
  }

  return (
    <div className="px-5">
      <div className="flex gap-10 justify-between h-11 items-center dark:text-white text-lightText px-5 py-1.5 w-full rounded dark:bg-secondary-dark bg-secondary-light relative">
        <span
          className={`cursor-pointer ${Scale ? "Scale0" : "Scale100 "} absolute Transition`}
          onClick={searchHandler}
        >
          <Search width={"2rem"} height={"2rem"} />
        </span>

        <span
          className={`cursor-pointer ${Scale ? "Scale100" : "Scale0"} relative Transition`}
        >
          <Back width={"2rem"} height={"1.5rem"} onClick={BackHandler} />
        </span>
        <input
          ref={inputRef}
          type="text"
          name="search"
          className="dark:bg-secondary-dark bg-secondary-light h-5 rounded grow outline-0"
          placeholder="Search"
          onFocus={() => searchHandler()}
          onBlur={() => BackHandler()}
        />
      </div>
    </div>
  );
}

export default SearchBar;
