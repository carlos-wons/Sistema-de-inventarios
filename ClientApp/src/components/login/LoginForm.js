import Button from "../../ui/Button";
import Input from "../../ui/Input";
import './LoginForm.css';

function LoginForm (){

    function signUp (){
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
    }

    function logIn(){
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
    }

    return(
        <div className="w-full flex justify-center pt-20">        
            <div class="container" id="container">
                <div class="form-container sign-up-container p-5">
                    <div className="formulario">
                        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>
                        <Input header="Nombre Usuario" placeholder="Nombre usuario"/>
                        <Input header="E-mail" placeholder="example@algo.com"/>
                        <Input header="Password" placeholder="Password"/>
                        <Button text="Sign up"/>
                    </div>
                </div>

                <div class="form-container sign-in-container p-5">
                    <div className="formulario">
                        <h2 className="text-2xl font-bold text-center mb-4">Log in</h2>
                        <Input header="Nombre Usuario" placeholder="Nombre de usuario"/>
                        <Input header="Password" placeholder="Password"/>
                        <a href="#" className="text-sm text-blue-600 hover:underline mb-4">
                            Forgot your password?
                        </a>
                        <Button text="Log in"/>
                    </div>
                </div>
                
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left bg-gradient-to-br from-green-400 to-blue-600">
                            <h1 className="text-2xl font-bold mb-4">¡Bienvenido de vuelta!</h1>
                            <p className="mb-4">
                                Para mantenerte conectado con nosotros por favor inicia sesion con tu informacion personal
                            </p>
                            <button class="border border-white px-8 py-2 rounded-lg text-sm font-bold" id="signIn" onClick={logIn}>
                                Log in
                            </button>
                        </div>
                        
                        <div class="overlay-panel overlay-right bg-gradient-to-br from-green-400 to-blue-600">
                            <h1 className="text-2xl font-bold mb-4">¡Hola amigo!</h1>
                            <p className="mb-4">
                                Registrate para comenzar una increible aventura con nosotros
                            </p>
                            <button className="border border-white px-8 py-2 rounded-lg text-sm font-bold" id="signUp" onClick={signUp}>
                                Sign Up
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;