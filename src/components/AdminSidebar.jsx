import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {
  const { logout } = useAuth({ middleware: "auth" });
  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="Logo" className="w-40" />
      </div>
      <nav className="flex flex-col p-4">
        <Link to="/admin" className="font-bold text-lg">
          Pedidos
        </Link>
        <Link to="/admin/productos" className="font-bold text-lg">
          Productos
        </Link>
      </nav>
      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full hover:bg-red-700 p-3 text-white font-bold truncate"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
