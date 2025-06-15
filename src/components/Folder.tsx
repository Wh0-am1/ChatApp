import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { ADD?: boolean; name?: string };

function Folder({ ADD, name }: Props) {
  return (
    <button className="dark:bg-secondary-dark bg-secondary-light text-xs text-[#838a8e] rounded-2xl p-1.5 folderHover">
      {ADD ? <FontAwesomeIcon icon={faPlus} /> : name}
    </button>
  );
}

export default Folder;
