import { useEffect, useState } from "react";
import ExportExcel from "react-export-excel";
import axios from "axios";
import TablaProductos from "../components/reporte1/TablaProductos";
import Select from "../ui/Select";
import '../Animacion.css';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

function Reporte1() {
    const [datos, setDatos] = useState({
        trimestre1: [],
        trimestre2: [],
        trimestre3: [],
        trimestre4: [],
    });

    const [year, setYear] = useState(1996);
    const [animationOn, setAnimationOn] = useState(true);

    useEffect(() => {

        const cargarDatos = async () => {
            const response = await axios("/api/products/listado/1996");
            console.log(response.data);
            setDatos(response.data);
        };

        const timer = setTimeout(() => {
            console.log("hola time");
            cargarDatos();
            setAnimationOn(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => { 
        const cargarDatos = async () => {
            const response = await axios("/api/products/listado/" + year);
            console.log(response.data);
            setDatos(response.data);
        };
        cargarDatos();

        console.log("hola mundo");
    },[year]);

    if(animationOn === true){
        return(
            <div className="p-6 lg:p-20 grid place-items-center h-screen">
                <img src="./Logo.jpeg" id="imagen"></img>
            </div>
        );
    }

    return (
        <div className="p-6 lg:p-20">
            <h1 className="text-4xl font-bold mb-10">Top 5 Productos</h1>
            <div className="mb-6">
                <Select 
                    header="Selecciona un anio:" 
                    data={[
                        {text : "1996", value : 1996 },
                        {text : "1997", value : 1997 },
                        {text : "1998", value : 1998 }
                    ]}
                    onChange={setYear}
                />
            </div>

            <ExcelFile
                element={
                    <button className="bg-green-400 p-2 rounded-md my-4">
                        Exportar
                    </button>
                }
                filename="ExcelTuto"
            >
                <ExcelSheet
                    data={datos.trimestre1}
                    name="Trimestre 1"
                >
                    <ExcelColumn label="ID Producto" value="id" />
                    <ExcelColumn label="Poblacion" value="productName" />
                    <ExcelColumn label="Total" value="total" />
                    <ExcelColumn label="Fecha" value="fecha" />
                </ExcelSheet>
                <ExcelSheet
                    data={datos.trimestre2}
                    name="Trimestre 2"
                >
                    <ExcelColumn label="ID Producto" value="id" />
                    <ExcelColumn label="Poblacion" value="productName" />
                    <ExcelColumn label="Total" value="total" />
                    <ExcelColumn label="Fecha" value="fecha" />
                </ExcelSheet>
                <ExcelSheet
                    data={datos.trimestre3}
                    name="Trimestre 3"
                >
                    <ExcelColumn label="ID Producto" value="id" />
                    <ExcelColumn label="Poblacion" value="productName" />
                    <ExcelColumn label="Total" value="total" />
                    <ExcelColumn label="Fecha" value="fecha" />
                </ExcelSheet>
                <ExcelSheet
                    data={datos.trimestre4}
                    name="Trimestre 4"
                >
                    <ExcelColumn label="ID Producto" value="id" />
                    <ExcelColumn label="Poblacion" value="productName" />
                    <ExcelColumn label="Total" value="total" />
                    <ExcelColumn label="Fecha" value="fecha" />
                </ExcelSheet>
            </ExcelFile>
            
            <div className="mb-4">
                <h2 className="text-2xl mb-4">Trimestre 1</h2>
                <TablaProductos data={datos.trimestre1} />
            </div>
            <div className="mb-4">
                <h2 className="text-2xl mb-4">Trimestre 2</h2>
                <TablaProductos data={datos.trimestre2} />
            </div>
            <div className="mb-4">
                <h2 className="text-2xl mb-4">Trimestre 3</h2>
                <TablaProductos data={datos.trimestre3} />
            </div>
            <div>
                <h2 className="text-2xl mb-4">Trimestre 4</h2>
                <TablaProductos data={datos.trimestre4} />
            </div>
        </div>
    );
}

export default Reporte1;
