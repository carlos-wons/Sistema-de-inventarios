import Button from "../../ui/Button";
import ModalBase from "../../ui/ModalBase";
import Select from "../../ui/Select";

function ModalAgregarMovimientos({ id }) {
    const header = "Nuevo Movimiento";

    return (
        <ModalBase header="Nuevo movimiento" id={id}>
            <div className="p-6 space-y-6">
                <Select
                    header="Tipo de movimiento:"
                    data={[
                        { text: "Entrada por compra", value: 1 },
                        { text: "Salida por venta", value: 2 },
                        { text: "Traspaso", value: 3 },
                        { text: "Ajuste", value: 4 },
                    ]}
                />
                <Select
                    header="Almacen de origen:"
                    data={[
                        { text: "Mexico", value: 1 },
                        { text: "Australia", value: 2 },
                        { text: "United Kingdom", value: 3 },
                        { text: "Colombia", value: 3 },
                    ]}
                />
                <Select
                    header="Almacen de destino:"
                    data={[
                        { text: "Mexico", value: 1 },
                        { text: "Australia", value: 2 },
                        { text: "United Kingdom", value: 3 },
                        { text: "Colombia", value: 3 },
                    ]}
                />
                <div className="flex flex-row w-full">
                    <Select
                        header="ID Producto:"
                        data={[
                            { text: "Samsung Galaxy S20 5G", value: 1 },
                            { text: "IPad Pro 12", value: 2 },
                            { text: "Lenovo Thinkpad T14", value: 3 },
                            { text: "Mouse Logitech 203", value: 3 },
                        ]}
                    />
                    <div className="ml-3">
                        <div className="mt-7">
                            <Button text="Agregar" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center space-x-2 rounded-b border-t border-gray-200">
                    <button
                        data-modal-toggle="test"
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        I accept
                    </button>
                    <button
                        data-modal-toggle="defaultModal"
                        type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </ModalBase>
    );
}

export default ModalAgregarMovimientos;
