type Props = Partial<Record<"Initial" | "Owner", boolean>>;

function Messages({ Initial, Owner }: Props) {
    return (
        <div
            className={`flex text-black mt-1 w-[80%] ${Owner ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`bg-blue-300 w-fit p-2 ${Initial ? (Owner ? "rounded-bl-2xl rounded-br-2xl rounded-tl-2xl" : "rounded-bl-2xl rounded-tr-2xl rounded-br-2xl") : Owner ? "rounded-tl-2xl rounded-bl-2xl" : "rounded-tr-2xl rounded-br-2xl"}`}
            >
                <p>Message</p>
            </div>
        </div>
    );
}

export default Messages;
