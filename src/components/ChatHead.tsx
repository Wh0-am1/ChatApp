import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import DetialField from "./DetialField";
import Extra from "./Extra";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type TypeProps = {
  setChatOn: (value: boolean) => void;
};

function ChatHead({ setChatOn }: TypeProps) {
  const [Search, setSearch] = useState(false);
  const [SearchText, setSearchText] = useState("");
  return (
    <div>
      <div className="flex gap-3 justify-between items-center h-16 min-w-fit dark:bg-secondary-dark bg-secondary-light dark:text-gray-300  px-3">
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setChatOn(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </div>
          <Profile />
        </div>
        <div className="grow">
          <DetialField />
        </div>
        <div>
          <Extra SEARCH={!Search} DOTMENU setSearch={setSearch} />
        </div>
      </div>
      <div
        className={`flex gap-3 items-center justify-between w-full dark:bg-secondary-dark bg-secondary-light dark:text-gray-300 ${Search ? "p-3" : "p-0 h-0"} overflow-hidden`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="cursor-pointer"
          onClick={() => setSearch(false)}
        />
        <input
          type="text"
          placeholder="Search Here"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full dark:bg-secondary-dark bg-secondary-light rounded-md outline-none grow"
        />
        <div
          className="dark:text-gray-400 text-gray-600 text-sm cursor-pointer"
          onClick={() => setSearchText("")}
        >
          Clear
        </div>
      </div>
    </div>
  );
}

export default ChatHead;
