function TablaProductos({ data }) {
    const _body = data.map((registro) => {
        return (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{registro.id}</td>
                <td class="px-6 py-4">{registro.productName}</td>
                <td class="px-6 py-4">{registro.total}</td>
                <td class="px-6 py-4">{registro.fecha}</td>
            </tr>
        );
    });

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID Producto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>{_body}</tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaProductos;
