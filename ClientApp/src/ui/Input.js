function Input({
    header,
    placeholder,
    disabled,
    type
}){

    const _type = (type)? type : "text";

    return(
        <div class="mb-6">
            { header &&  
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">
                    {header}
                </label>
            } 
            <input 
                type={_type} 
                id="base-input"
                placeholder={placeholder}
                disabled={ disabled? true : false }
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    );
}

export default Input;