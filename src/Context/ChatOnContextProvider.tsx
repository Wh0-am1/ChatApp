import React from "react";

export const ChatOnContext = React.createContext<
    ((value: boolean) => void) | undefined
>(undefined);

function ChatOnContextProvider({
    children,
    setChatOn,
}: {
    children: React.ReactNode;
    setChatOn: (value: boolean) => void;
}) {
    return (
        <ChatOnContext.Provider value={setChatOn}>
            {children}
        </ChatOnContext.Provider>
    );
}

export default ChatOnContextProvider;
