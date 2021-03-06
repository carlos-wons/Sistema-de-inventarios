function Select({ header, onChange, data }) {
    const options = data?.map((option) => {
        return <option value={option.value}> {option.text} </option>;
    });

    return (
        <div className="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900">
                {header}
            </label>
            <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event) => onChange(event.target.value)}
            >
                {options}
            </select>
        </div>
    );
}

export default Select;
