import Table from "../ui/Table";
import Button from "../ui/Button";
import ModalAgregarMovimientos from "../components/movements/ModalAgregarMovimientos";

function Movements() {
    return (
        <div className="px-6 lg:px-20 mt-6">
            <h1 className="text-3xl font-bold">Movimientos</h1>
            <div className="my-5">
                <Button text="Agregar" modal="addMovement" />
            </div>
            <ModalAgregarMovimientos id="addMovement" />
            <Table
                headers={["FECHA", "TIPO DE MOVIMIENTO", "ALMACEN", "ACCIONES"]}
                data={[
                    [
                        "hola",
                        "hola",
                        "hola",
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Edit
                        </a>,
                    ],
                    ["hola", "hola", "hola", "hola"],
                    ["hola", "hola", "hola", "hola"],
                    ["hola", "hola", "hola", "hola"],
                ]}
            />
        </div>
    );
}

export default Movements;
