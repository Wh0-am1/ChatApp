import React from "react";
import Profile from "./Profile";

function Chat() {
    return (
        <div className="px-5 w-full dark:hover:bg-gray-600 hover:bg-secondary-light hover:rounded-b-lg group relative LineRemoving ">
            <div className="flex items-center w-full dark:bg-primary-dark bg-primary-light dark:group-hover:bg-gray-600 group-hover:bg-secondary-light h-[72px]  gap-4 border-b dark:border-b-gray-700 border-b-gray-300">
                <Profile />
                <div className="dark:text-gray-300 text-black w-full ">Detiales</div>
            </div>
        </div>
    );
}

export default Chat;
