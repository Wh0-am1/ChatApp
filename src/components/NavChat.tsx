import Folders from "./Folders";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Extra from "./Extra";

function NavChat({ setShowBar }: { setShowBar: (value: boolean) => void }) {
    return (
        <div className="sticky top-0 z-10 flex flex-col w-full bg-primary-light dark:bg-primary-dark">
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
                <Extra CHAT DOTMENU />
            </div>
            <SearchBar />
            <Folders />
        </div>
    );
}

export default NavChat;
