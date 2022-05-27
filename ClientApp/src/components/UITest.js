import Button from "../ui/Button";
import Input from "../ui/Input";
import ModalBase from "../ui/ModalBase";
import Navbar from "../ui/Navbar";
import Select from "../ui/Select";

function UITest () {

    function onChange (value) {
        console.log("our value is " + value);
    }

    return(
        <div>            
            <Button text="Toogle Modal" modal="test" type="success"/>
            <Input
                header="Base"
                placeholder="hola mundo"
            />
            <Select
                header="Selecciona tu pais"
                onChange={onChange} 
                data = {[
                    {text : "Mexico", value : 1},
                    {text : "Australia", value : 2},
                    {text : "United Kingdom", value : 3},
                    {text : "Colombia", value : 3}
                ]} 
            />
            <ModalBase header="Titulo" id="test">
                {/*Seccion Principal*/}
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>

                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="test" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div>
            </ModalBase>
        </div>
    );
}

export default UITest;