import DotMenu from "../Icons/DotMenu";
import NewChat from "../Icons/NewChat";
import Folders from "./Folders";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavChat({ setShowBar }: { setShowBar: (value: boolean) => void }) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center font-bold text-2xl px-6 py-7 h-16 ">
                <div className="flex gap-3">
                    <div
                        className="lg:hidden HoverRound pb-1 px-2 "
                        onClick={() => setShowBar(true)}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-[1.2rem] dark:text-gray-300 text-lightText "
                        />
                    </div>
                    <div className="dark:text-white">Chats</div>
                </div>
                <div className="flex gap-3 dark:text-gray-300 text-lightText">
                    <div className="p-2 HoverRound">
                        <NewChat height={"1.5rem"} width={"1.5rem"} />
                    </div>
                    <div className="p-2 HoverRound">
                        <DotMenu height={"1.5rem"} width={"1.5rem"} className="pb-1" />
                    </div>
                </div>
            </div>
            <SearchBar />
            <Folders />
        </div>
    );
}

export default NavChat;
