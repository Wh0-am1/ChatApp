import Communities from "../Icons/Communities";
import Chat from "../Icons/Chat";
import Status from "../Icons/Status";
import Channels from "../Icons/Channels";
import Settings from "../Icons/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import NotifyCircle from "./NotifyCircle";

type PROPTYPE = {
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    Dark: boolean;
    setShowBar: (value: boolean) => void;
    ShowBar: boolean;
};

function SideBar({ setDark, Dark, setShowBar, ShowBar }: PROPTYPE) {
    console.log(Dark);
    return (
        <div>
            {ShowBar && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-40"
                    onClick={() => setShowBar(false)}
                />
            )}
            <div
                className={`${ShowBar ? "w-16" : "w-0 max-lg:overflow-hidden"} max-lg:absolute max-lg:z-40 lg:w-16 TransitionWidth`}
            >
                <div className="flex flex-col bg-secondary-light dark:bg-secondary-dark h-screen dark:text-gray-300 text-lightText justify-between items-center border-r border-gray-300 dark:border-r-gray-600">
                    <div>
                        <ul className="icons flex flex-col grow gap-7 pt-3">
                            <li className="group ">
                                <Chat height={"1.5rem"} width={"1.5rem"} />
                                <span className="tooltip">tooltip</span>
                                <NotifyCircle />
                            </li>
                            <li className="group">
                                <Status height={"1.5rem"} width={"1.5rem"} />
                                <span className="tooltip">tooltip</span>
                            </li>
                            <li className="group">
                                <Channels height={"1.5rem"} width={"1.5rem"} />
                                <span className="tooltip">tooltip</span>
                            </li>
                            <li className="group">
                                <Communities height={"1.5rem"} width={"1.5rem"} />
                                <span className="tooltip">tooltip</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-3">
                        <ul className="icons flex flex-col gap-3">
                            <li
                                className="group"
                                onClick={() => setDark((prev: boolean): boolean => !prev)}
                            >
                                <div className="relative h-6 rounded-full overflow-hidden">
                                    <div className="absolute h-full">
                                        <div className="flex flex-col h-full justify-between themeMode">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faMoon}
                                                    className="text-[1.4rem]"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faSun}
                                                    className="text-[1.4rem]"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className="tooltip">tooltip</span>
                            </li>
                            <li className="group">
                                <Settings height={"1.5rem"} width={"1.5rem"} />
                                <span className="tooltip">tooltip</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
