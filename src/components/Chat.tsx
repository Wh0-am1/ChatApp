import { useContext } from "react";
import Profile from "./Profile";
import { DefaultContext } from "../Context/DefaultContextProvider";
import { ChatOnContext } from "../Context/ChatOnContextProvider";

function Chat() {
  const setDefault = useContext(DefaultContext);
  const setChatOn = useContext(ChatOnContext);
  function Handler() {
    if (setDefault) setDefault(false);
    if (setChatOn) setChatOn(true);
    console.log(setChatOn);
  }
  return (
    <div className="px-5 w-full dark:hover:bg-gray-600 hover:bg-secondary-light hover:rounded-b-lg group relative LineRemoving ">
      <div className="flex items-center w-full dark:bg-primary-dark bg-primary-light dark:group-hover:bg-gray-600 group-hover:bg-secondary-light h-[72px]  gap-4 border-b dark:border-b-gray-700 border-b-gray-300">
        <Profile />
        <div
          className="dark:text-gray-300 text-black w-full cursor-pointer"
          onClick={Handler}
        >
          Detiales
        </div>
      </div>
    </div>
  );
}

export default Chat;
