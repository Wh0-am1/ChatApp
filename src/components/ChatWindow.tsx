import ChatHead from "./ChatHead";
import MessageBar from "./MessageBar";
import Messages from "./Messages";

type TypeProps = {
    ChatOn: boolean | undefined;
    setChatOn: (value: boolean) => void;
};

function ChatWindow({ ChatOn, setChatOn }: TypeProps) {
    return (
        <div
            className={`flex flex-col  w-full h-screen justify-between grow dark:bg-primary-dark bg-primary-light ${ChatOn ? "max-md:w-full" : "max-md:w-0"} `}
        >
            <ChatHead setChatOn={setChatOn} />
            <div className="flex flex-col grow items-center overflow-auto ">
                <Messages Initial Owner />
                <Messages Initial />
                <Messages Initial Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Initial />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages Initial Owner />
                <Messages Owner />
                <Messages Initial />
                <Messages />
                <Messages />
                <Messages Owner Initial />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Initial />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages Initial Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Owner />
                <Messages Initial />
            </div>
            <MessageBar />
        </div>
    );
}

export default ChatWindow;
