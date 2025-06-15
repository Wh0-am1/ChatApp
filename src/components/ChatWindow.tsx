import ChatHead from "./ChatHead";
import MessageBar from "./MessageBar";

type TypeProps = {
    ChatOn: boolean | undefined;
    setChatOn: (value: boolean) => void;
};

function ChatWindow({ ChatOn, setChatOn }: TypeProps) {
    return (
        <div
            className={`flex flex-col  w-full justify-between grow dark:bg-primary-dark bg-primary-light ${ChatOn ? "max-md:w-full" : "max-md:w-0"} `}
        >
            <ChatHead setChatOn={setChatOn} />
            <div className="grow">Messages</div>
            <MessageBar />
        </div>
    );
}

export default ChatWindow;
