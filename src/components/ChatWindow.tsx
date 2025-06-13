import ChatHead from "./ChatHead";
import MessageBar from "./MessageBar";

type TypeProps = {
    ChatOn: boolean;
    setChatOn: (value: boolean) => void;
};

function ChatWindow({ ChatOn, setChatOn }: TypeProps) {
    return (
        <div
            className={`flex flex-col w-full justify-between grow dark:bg-primary-dark bg-primary-light max-md:${ChatOn ? "w-full" : "w-0"} TransitionWidth`}
        >
            <ChatHead setChatOn={setChatOn} />
            <div className="grow">Messages</div>
            <MessageBar />
        </div>
    );
}

export default ChatWindow;
