import { useState } from "react";
import ChatListSection from "./components/ChatListSection";
import ChatWindow from "./components/ChatWindow";
import SideBar from "./components/SideBar";

function App() {
  const [Dark, setDark] = useState<boolean>(false);
  const [ShowBar, setShowBar] = useState<boolean>(false);
  return (
    <div className={`${Dark ? "dark" : ""} dark:bg-[#232221] bg-[#dbd8d4]`}>
      <div className="flex max-lg:w-screen w-[1680px]  mx-auto">
        <SideBar
          setDark={setDark}
          Dark={Dark}
          setShowBar={setShowBar}
          ShowBar={ShowBar}
        />
        <div className="flex w-screen justify-between">
          <ChatListSection setShowBar={setShowBar} />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
