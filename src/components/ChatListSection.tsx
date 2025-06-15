import ChatLists from "./ChatLists";
import NavChat from "./NavChat";

type TypeProps = {
    setShowBar: (value: boolean) => void;
    ChatOn: boolean | undefined;
};

function ChatListSection({ setShowBar, ChatOn }: TypeProps) {
    return (
        <div
            className={`relative lg:w-md md:min-w-96 h-screen overflow-y-auto dark:bg-primary-dark bg-primary-light Scroll border-r border-gray-300 dark:border-r-gray-600 ${!ChatOn ? "max-md:w-full" : "max-md:w-0"}`}
        >
            <NavChat setShowBar={setShowBar} />
            <ChatLists />
        </div>
    );
}

export default ChatListSection;
