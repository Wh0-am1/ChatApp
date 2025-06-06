import { useRef } from "react";
import Folder from "./Folder";

function Folders() {
  let wheelRef = useRef<HTMLElement>(null);

  function ScrollHandler(e: React.WheelEvent<HTMLDivElement>) {
    const wheel = wheelRef.current;
    if (wheel) {
      e.preventDefault();
      wheel.scrollLeft += e.deltaY;
    }
  }
  return (
    <div className="relative px-5 pt-3 border-b-gray-300">
      <div
        className="h-8 flex noScroll gap-2 overflow-x-auto"
        onWheel={ScrollHandler}
        ref={wheelRef}
      >
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
      <hr className="dark:text-gray-600 text-gray-300 w-full h-[0.5px] mt-1" />
    </div>
  );
}

export default Folders;
