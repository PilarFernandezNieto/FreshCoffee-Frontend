import { Link } from "react-router-dom";


export default function Login() {
  return (
    <>
    <h1 className="text-4xl font-black">Inicia sesión</h1>
    <p>Para crear un pedido debes iniciar sesión</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
      <form action="">

        <div className="mb-4">
          <label htmlFor="email" className="text-slate-800">
            Email:
          </label>
          <input type="email" id="email" name="email" placeholder="Tu email" className="mt-2 block w-full p-3 bg-gray-50"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-slate-800">
            Contraseña:
          </label>
          <input type="password" id="password" name="password" placeholder="Tu contraseña" className="mt-2 block w-full p-3 bg-gray-50"/>
        </div>

        <input type="submit" className="bg-indigo-600 hover:bg-indigo-800 w-full text-white mt-5 p-3 uppercase font-bold cursor-pointer rounded" value="Iniciar sesión" />

      </form>
    </div>
    <nav className="mt-5">
      <Link to="/auth/registro">¿No tienes cuenta? Crea una</Link>
    </nav>
  </>
  );
}
