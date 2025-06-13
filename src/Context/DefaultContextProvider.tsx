import React from "react";

type TypeDefault = ((value: boolean) => void) | undefined;
export const DefaultContext = React.createContext<TypeDefault>(undefined);

function DefaultContextProvider({
    children,
    setDefault,
}: {
    children: React.ReactNode;
    setDefault: TypeDefault;
}) {
    return (
        <DefaultContext.Provider value={setDefault}>
            {children}
        </DefaultContext.Provider>
    );
}

export default DefaultContextProvider;
