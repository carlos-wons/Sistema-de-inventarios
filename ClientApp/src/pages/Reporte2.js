import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import Select from "../ui/Select";
import '../Animacion.css';

  
const options = {
  chart: {
 
  },
  colors: ["#45B39D"]
};


function Reporte2(){
  
  const[datos,setDatos]=useState({});

  const[year,setYear]=useState(1996);
  const[id,setID]=useState(1);
  const [animationOn, setAnimationOn] = useState(true);


  useEffect(()=>{
    const timer = setTimeout(() => {
      setAnimationOn(false);
    }, 8000);

    return () => clearTimeout(timer);
  });

  useEffect(()=>{
    const cargar=async()=>{
      
      const response = await axios.get ("api/products/productoPorMes/"+year+"/"+id);
      setDatos(response.data);

      var info=[["Mes", "Cantidad vendida"]];

      for(var i=0; i<response.data.length; i++){
        var nuevo= [response.data[i].mes,response.data[i].cantidad];
        info=[...info,nuevo];

      }

      console.log(info);
      setDatos(info);
   
    
    }

    cargar();
    
  },[year, id]);


  if(animationOn === true){
    return(
        <div className="p-6 lg:p-20 grid place-items-center h-screen">
            <img src="./logo.png" id="imagen"></img>
        </div>
    );
  }

    return(
        <div className="p-6 lg:p-20">

          <h1 className="text-4xl font-bold mb-10">Desglose de ventas para un producto especifico</h1>

         <div className="py-3 my-4">
        <Select
          header="Selecciona un año"
          data= {[
            {text:"1996", value: 1996},
            {text:"1997", value: 1997},
            {text:"1998", value: 1998}
          ]}
          onChange={setYear}
          />
        </div>
        
        <div className="">
        <Select
          header="Selecciona un producto"
          data= {[
            {text:"Chai", value: 1},
            {text:"Chang", value: 2},
            {text:"Aniseed Syrup", value: 3},
            {text:"Chef Anton's Cajun Seasoning", value: 4},
            {text:"Chef Anton's Gumbo Mix", value: 5},
            {text:"Grandma's Boysenberry Spread", value: 6},
            {text:"Uncle Bob's Organic Dried Pears", value: 7},
            {text:"Northwoods Cranberry Sauce", value: 8},
            {text:"Mishi Kobe Niku", value: 9},
            {text:"Ikura", value: 10},
            {text:"Queso Cabrales", value: 11},
            {text:"Queso Manchego La Pastora", value: 12},
            {text:"Konbu", value: 13},
            {text:"Tofu", value: 14},
            {text:"Genen Shouyu", value: 15},
            {text:"Pavlova", value: 16},
            {text:"Alice Mutton", value: 18},
            {text:"Carnarvon Tigers", value: 19},
            {text:"Teatime Chocolate Biscuits", value: 20},
            {text:"Sir Rodney's Marmalade", value: 21},
            {text:"Sir Rodney's Scones", value: 22},
            {text:"Gustaf's Knckebrd", value: 23},
            {text:"Tunnbrd", value: 24},
            {text:"Guaran Fantstica", value: 25},
            {text:"NuNuCa Nu-Nougat-Creme", value: 26},
            {text:"Gumbr Gummibrchen", value: 27},
            {text:"Schoggi Schokolade", value: 28},
            {text:"Rssle Sauerkraut", value: 29},
            {text:"Thringer Rostbratwurst", value: 30},

          ]}
          onChange={setID}
          />
        </div>


          <div className="my-6 py-6 px-4">
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={datos}
              options={options}
              />
          </div>
        
     
        </div>   

    );
}

export default Reporte2;