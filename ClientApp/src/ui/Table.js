function Table({ headers, data }) {
    const _headers = headers.map((header) => {
        return (
            <th scope="col" class="px-6 py-3 text-center">
                {header}
            </th>
        );
    });

    const _data = data.map((element) => {
        const fila = element.map((row) => {
            return <td class="px-7 py-4 text-center">{row}</td>;
        });

        return <tr className="bg-white border-b">{fila}</tr>;
    });

    return (
        <div>
            <div class="">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>{_headers}</tr>
                        </thead>
                        <tbody>{_data}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
