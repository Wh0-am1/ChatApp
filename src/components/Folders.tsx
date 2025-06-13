import { useEffect, useRef } from "react";
import Folder from "./Folder";

function Folders() {
  let wheelRef = useRef<HTMLDivElement | null>(null);

  function ScrollHandler(e: WheelEvent) {
    const wheel = wheelRef.current;
    if (wheel) {
      e.preventDefault();
      wheel.scrollLeft += e.deltaY;
    }
  }

  useEffect(() => {
    const wheel = wheelRef.current;
    if (wheel) {
      wheel.addEventListener("wheel", ScrollHandler, { passive: false });
    }

    return () => {
      wheel?.removeEventListener("wheel", ScrollHandler);
    };
  }, []);
  return (
    <div className="relative px-5 pt-3 border-b-gray-300">
      <div className="h-8 flex noScroll gap-2 overflow-x-auto" ref={wheelRef}>
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
