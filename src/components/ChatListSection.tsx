import ChatLists from "./ChatLists";
import NavChat from "./NavChat";

type TypeProps = {
    setShowBar: (value: boolean) => void;
    ChatOn: boolean;
};

function ChatListSection({ setShowBar, ChatOn }: TypeProps) {
    return (
        <div
            className={`TransitionWidth relative lg:w-md md:min-w-96 h-screen overflow-auto dark:bg-primary-dark bg-primary-light Scroll  border-r border-gray-300 dark:border-r-gray-600 max-md:${!ChatOn ? "w-full" : "w-0"}`}
        >
            <NavChat setShowBar={setShowBar} />
            <ChatLists />
        </div>
    );
}

export default ChatListSection;
