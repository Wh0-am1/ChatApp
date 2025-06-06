import ChatLists from "./ChatLists";
import NavChat from "./NavChat";

function ChatListSection({
  setShowBar,
}: {
  setShowBar: (value: boolean) => void;
}) {
  return (
    <div className="lg:w-md md:w-96 h-screen overflow-auto dark:bg-primary-dark bg-primary-light Scroll">
      <NavChat setShowBar={setShowBar} />
      <ChatLists />
    </div>
  );
}

export default ChatListSection;
