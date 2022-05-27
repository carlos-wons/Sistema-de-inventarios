import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
    const standard = (
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
                <Link to="/">Inicio</Link>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Contacto
                </a>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Planes y Precios
                </a>
            </li>
        </ul>
    );

    const company = (
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
                <Link to="/">Inicio</Link>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Contacto
                </a>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Planes y Precios
                </a>
            </li>
            <li class="nav-item p-2">
                <Link
                    to="/movements"
                    className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                >
                    Movimientos
                </Link>
            </li>
            <li className="nav-item p-2">
                <div class="flex justify-center">
                    <div>
                        <div class="dropdown relative">
                            <a
                                class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0 flex"
                                href="#"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Reportes
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    class="w-2 ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                    ></path>
                                </svg>
                            </a>
                            <ul
                                class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                aria-labelledby="dropdownMenuButton2"
                            >
                                <li>
                                    <a
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href="./top5"
                                        >Reporte 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href="./productosPorMes"
                                        >Reporte 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href="./Reporte3"
                                        >Reporte 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );

    const superAdmin = (
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
                <Link to="/">Inicio</Link>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Contacto
                </a>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Planes y Precios
                </a>
            </li>
            <li class="nav-item p-2">
                <a
                    class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                    href="#"
                >
                    Super Admin
                </a>
            </li>
        </ul>
    );

    return (
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button
                    class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        class="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div
                    class="collapse navbar-collapse flex-grow items-center"
                    id="navbarSupportedContent1"
                >
                    <a
                        class="flex items-center text-white-900 hover:text-white-900 focus:text-white-900 mt-2 lg:mt-0 mr-1"
                        href="./index.html"
                    >
                        <img
                            class="mr-2"
                            src="./Logo.jpeg"
                            style={{ height: "45px" }}
                            alt=""
                            loading="lazy"
                        />
                        <span class="font-medium">Northwind</span>
                    </a>

                    {/*Enlaces*/}
                    {company}
                </div>

                {/* Seccion lateral */}
                <div class="flex items-center relative">
                    <div class="dropdown relative">
                        <Button text="Log in" type="success" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
