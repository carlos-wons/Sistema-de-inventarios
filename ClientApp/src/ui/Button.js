function Button({ text, onClick, modal, type }) {
    const primary =
        "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5";
    const secondary =
        "text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5";
    const success =
        "text-white bg-gray-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5";

    var _type = primary;
    if (type) {
        if (type === "secondary") {
            _type = secondary;
        }
        if (type === "success") {
            _type = success;
        }
    }

    return (
        <div class="flex">
            <button
                type="button"
                onClick={onClick}
                data-modal-toggle={modal}
                class={_type}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;
