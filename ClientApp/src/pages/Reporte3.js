import React from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useEffect, useState } from "react";
import select from "../ui/Select";
import Select from "../ui/Select";
import '../Animacion.css';

const options = {
  hAxis: { minValue: 0, maxValue: 20000 },
  chartArea: { top: 0, right: 0, bottom: 0 },
};

function Reporte3() {

  const [datos, setDatos] = useState([]);

  const [year, setYear] = useState(1996);

  const [animationOn, setAnimationOn] = useState(true);
  
  useEffect(() => {
    const cargarDatos = async () => {
        const response = await axios("/api/employees/productos/Empleados/1996");
        
        var arr = [["Name","Total"]];
        for(var i=0; i<response.data.length; i++){
          var act = response.data[i];
          var nuevo = [act.nombreEmpleado, act.total];
          arr = [...arr,nuevo];
        }
        setDatos(arr);
    };

    const timer = setTimeout(() => {
      cargarDatos();
      setAnimationOn(false);
    }, 8000);

    return () => clearTimeout(timer);

    
  },[]);

  useEffect(() => {
    const cargarDatos = async () => {
        const response = await axios("/api/employees/productos/Empleados/" + year);
        
        var arr = [["Name","Total"]];
        for(var i=0; i<response.data.length; i++){
          var act = response.data[i];
          var nuevo = [act.nombreEmpleado, act.total];
          arr = [...arr,nuevo];
        }
        setDatos(arr);
    };
    cargarDatos();
    console.log(datos);
    console.log(year);
  },[year]);
  
  if(animationOn === true){
    return(
        <div className="p-6 lg:p-20 grid place-items-center h-screen">
            <img src="./logo.png" id="imagen"></img>
        </div>
    );
  }

  return (
    <div className="p-6 lg:p-20">
      <h1 className="text-4xl font-bold mb-10">Total Productos vendidos por empleado</h1>
      <div className="mb-6">
        <Select
          header="Seleccionar anio : "
          data ={[
            {text : "1996", value : 1996},
            {text : "1997", value : 1997},
            {text : "1998", value : 1998}
          ]}
          onChange = {setYear}
          />
          <br/>
      </div>
      <div className="mb-6">
      <Chart
        chartType="BarChart"
        width="90%"
        height="400px"
        data={datos}
        options={options}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "NumberRangeFilter",
            options: {
              filterColumnIndex: 1,
              minValue: 0,
              maxValue: 200000,
            },
          },
        ]}
      />
      </div>
    </div>
      
    
  );
}

export default Reporte3;