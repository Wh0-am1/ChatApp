import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetialField from "./DetialField";
import Extra from "./Extra";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TypeProps = {
    setChatOn: (value: boolean) => void;
};

function ChatHead({ setChatOn }: TypeProps) {
    return (
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
                <Extra SEARCH DOTMENU />
            </div>
        </div>
    );
}

export default ChatHead;
