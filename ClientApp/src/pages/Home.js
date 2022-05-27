import Slider from "../components/home/Slider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="text-center pt-8 px-1 text-3xl md:text-4xl font-semibold">
            </div>
            <Slider />
            <div>
                <div className="text-center pt-8 text-3xl md:text-4xl font-semibold">
                    <h2>¿Qué ofrecemos?</h2>
                </div>
                <br />
                
                <p className="text-center text-lg md:text-xl px-6">
                    Es una plataforma confiable que le permite a los usuarios
                    poder crear y administrar sus inventarios a través de
                    Internet, de forma rápida, facil y sencilla.
                </p>
            </div>

            <div className="p-6 lg:p-40">
                <div className="flex justify-start" data-aos="fade-up">
                    <div className="flex flex-col justify-left block w-fit p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-4">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                            <h5>Administración de categorías</h5>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <p className="inline-block align-middle ">
                                    Administra el personal y colaboradores para
                                    las asignaciones de activos.
                                </p>
                            </div>
                            <img
                                className="w-28 lg:w-60"
                                src="./person-logo.png"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end" data-aos="fade-right">
                    <div className="flex flex-col justify-center block w-fit p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-4">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                            <h5>Administración de proveedores</h5>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <p className="inline-block align-middle ">
                                    Administra proveedores y lleva un registro
                                    de las compras de activos.
                                </p>
                            </div>
                            <img
                                className="w-28 lg:w-60"
                                src="./person-logo.png"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-start" data-aos="fade-down-left">
                    <div className="flex flex-col justify-left block w-fit p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-4">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                            <h5>Administración del personal</h5>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <p className="inline-block align-middle ">
                                    Administra categorías personalizadas para
                                    adaptarse a tus necesidades.
                                </p>
                            </div>
                            <img
                                className="w-28 lg:w-60"
                                src="./person-logo.png"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end" data-aos="fade-right">
                    <div className="flex flex-col justify-center block w-fit p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-4">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                            <h5>Administración de activos</h5>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <p className="inline-block align-middle ">
                                    Administra todos tus activos de una manera
                                    rápida, fácil y sencilla.
                                </p>
                            </div>
                            <img
                                className="w-28 lg:w-60"
                                src="./person-logo.png"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-start" data-aos="fade-down-left">
                    <div className="flex flex-col justify-left block w-fit p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-4">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                            <h5>Asignación de activos</h5>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex items-center">
                                <p className="inline-block align-middle ">
                                    Asigna activos al personal para controlar y
                                    mejorar la Administración.
                                </p>
                            </div>
                            <img
                                className="w-28 lg:w-60"
                                src="./person-logo.png"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="text-center pt-8 text-4xl font-semibold">
                    <h2>Sobre nosotros</h2>
                </div>
                <div class="flex flex-col md:flex-row justify-between p-4 leading-normal">
                    <div class="w-auto md:w-3/6 m-10 flex flex-col items-center">
                        <img
                            src="./img/Filosofia.png"
                            class="w-9 h-9 justify-self-end"
                            alt=""
                        />
                        <h1 class="mb-2 text-2xl font-bold text-center text-gray-900 dark:text-white pt-4">
                            Filosofía
                        </h1>
                        <p class="text-justify">
                            Nuestro proposito es brindar a las empresas una
                            herramienta de control completo, eficaz y sencillo
                            de manejar
                        </p>
                    </div>
                    <div class="w-auto md:w-3/6 m-10 flex flex-col items-center">
                        <img
                            src="./img/Herramienta.png"
                            class="w-9 h-9 justify-center"
                            alt=""
                        />
                        <h1 class="mb-2 text-2xl font-bold text-center text-gray-900 dark:text-white pt-4">
                            ¿Qué hacemos?
                        </h1>
                        <p class="text-justify">
                            Ofrecemos un software que gestiona y controla el
                            inventario de una empresa, incluidas sus
                            existencias, compras y ventas. Ayuda a rastrear toda
                            la información, mantiene existencias efectivas y
                            simplifica los precios de los productos.
                        </p>
                    </div>
                    <div class="w-auto md:w-3/6 m-10 flex flex-col items-center">
                        <img
                            src="./img/ubicacion.png"
                            class="w-8 h-8 justify-center"
                            alt=""
                        />
                        <h1 class="mb-2 text-2xl font-bold text-center text-gray-900 dark:text-white pt-4">
                            Ubicación
                        </h1>
                        <p class="text-center">
                            Uriangato, Guanajuato. México.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
