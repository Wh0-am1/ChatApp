import { useEffect, useState } from "react";
import ChatListSection from "./components/ChatListSection";
import ChatWindow from "./components/ChatWindow";
import SideBar from "./components/SideBar";
import DefaultChatWindow from "./components/DefaultChatWindow";
import DefaultContextProvider from "./Context/DefaultContextProvider";
import ChatOnContextProvider from "./Context/ChatOnContextProvider";

function App() {
    const [Dark, setDark] = useState<boolean>(false);
    const [ShowBar, setShowBar] = useState<boolean>(false);
    const [Default, setDefault] = useState<boolean>(true);
    const [ChatOn, setChatOn] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const theme: string | null = localStorage.getItem("theme");
        if (theme && theme === "true") setDark(true);
        else setDark(false);
    }, []);

    return (
        <div
            className={`${Dark ? "dark" : ""} dark:bg-[#232221] bg-[#dbd8d4] overflow-hidden 2xl:px-24 px-0`}
        >
            <div className="flex max-lg:w-screen w-full mx-auto">
                <SideBar
                    setDark={setDark}
                    Dark={Dark}
                    setShowBar={setShowBar}
                    ShowBar={ShowBar}
                />
                <div className="flex w-full grow justify-between ">
                    <ChatOnContextProvider setChatOn={setChatOn}>
                        <DefaultContextProvider setDefault={setDefault}>
                            <ChatListSection setShowBar={setShowBar} ChatOn={ChatOn} />
                        </DefaultContextProvider>
                    </ChatOnContextProvider>
                    {Default ? (
                        <div className="w-full dark:bg-primary-dark bg-primary-light max-md:hidden">
                            <DefaultChatWindow />
                        </div>
                    ) : (
                        <ChatWindow ChatOn={ChatOn} setChatOn={setChatOn} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
