import NewChat from "../Icons/NewChat";
import DotMenu from "../Icons/DotMenu";
import Search from "../Icons/Search";

type Props = Partial<Record<"CHAT" | "DOTMENU" | "SEARCH", boolean>>;

function Extra({ CHAT, DOTMENU, SEARCH }: Props) {
    return (
        <div className="flex gap-3 dark:text-gray-300 text-lightText Extra">
            {CHAT && (
                <div className="HoverRound">
                    <NewChat height={"1.5rem"} width={"1.5rem"} />
                </div>
            )}
            {SEARCH && (
                <div className="HoverRound">
                    <Search height={"1.5rem"} width={"1.5rem"} className="pb-1" />
                </div>
            )}
            {DOTMENU && (
                <div className="HoverRound">
                    <DotMenu height={"1.5rem"} width={"1.5rem"} className="pb-1" />
                </div>
            )}
        </div>
    );
}

export default Extra;
