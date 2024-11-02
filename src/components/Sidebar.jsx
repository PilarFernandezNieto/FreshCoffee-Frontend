import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "auth" });
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Logotipo" className="w-40" />
      </div>
      <p className="my-10 text-xl text-center">Hola, {user?.name}</p>
      <div className="mt-10">
        {/* IMPORTANTE: EN ESTE CASO VA ENTRE PARÉNTESIS PORQUE ES EL RETURN */}
        {/* EN CASO DE NECESITAR LÓGICA TENDRÍAMOS QUE PONER LAS LLAVES Y DESPUÉS return(....) */}
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full hover:bg-red-700 p-3 text-white font-bold truncate"
          onClick={logout}
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
