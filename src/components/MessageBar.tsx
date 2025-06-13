import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PlaneTap from "../Icons/PlaneTap";

function MessageBar() {
    const [Text, setText] = useState("");
    return (
        <div className="flex gap-3 justify-between items-center  w-full dark:bg-secondary-dark bg-gray-200 h-16 lg:px-16 md:px-5 px-3 text-lightText dark:text-gray-400">
            <div className="cursor-pointer">
                <FontAwesomeIcon icon={faPuzzlePiece} size="xl" />
            </div>
            <div className="flex justify-between items-center dark:bg-[#2d3a42] bg-primary-light w-full h-8 rounded-3xl">
                <FontAwesomeIcon
                    icon={faFaceSmileWink}
                    size="lg"
                    className="px-3 cursor-pointer"
                />
                <input
                    type="text"
                    className="px-4 py-1 outline-none grow"
                    value={Text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>
            <div>
                {!Text ? (
                    <FontAwesomeIcon
                        icon={faMicrophone}
                        size="xl"
                        className="cursor-pointer"
                    />
                ) : (
                    <PlaneTap width="1.5rem" height="1.5rem" className="cursor-pointer" />
                )}
            </div>
        </div>
    );
}

export default MessageBar;
