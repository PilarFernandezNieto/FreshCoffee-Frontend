import useSWR from "swr";
import useQuiosco from "../hooks/useQuiosco";
import clienteAxios from "../config/axios";
import { formatearDinero } from "../helpers";

export default function Pedidos() {
  const token = localStorage.getItem("AUTH_TOKEN");

  const { handleClickCompletarPedido } = useQuiosco();

  const fetcher = () =>
    clienteAxios("/api/pedidos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const { data, error, isLoading } = useSWR("/api/pedidos", fetcher, {refreshInterval: 1000}); //{refreshInterval: 2000}
  const pedidos = data?.data.data;
  if (isLoading) {
    return "Cargando....";
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Pedidos</h1>
      <p className="text-2xl my-10">Administrador de pedidos</p>
      <div className="grid grid-cols-2 gap-4">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="p-5 bg-white shadow space-y-2 border-b"
          >
            <p className="text-xl font-bold text-slate-400">
              Contenido del Pedido:
            </p>
            {pedido.productos.map((producto) => (
              <div
                key={producto.id}
                className="border-b border-b-slate-200 last-of-type:border-none py-4"
              >
                <p className="text-sm">ID: {producto.id}</p>
                <p>{producto.nombre}</p>
                <p>
                  Cantidad:{" "}
                  <span className="font-bold">{producto.pivot.cantidad}</span>
                </p>
              </div>
            ))}
            <p className="text-lg font-bold text-slate-600">
              Cliente: <span className="font-normal">{pedido.user.name}</span>
            </p>
            <p className="text-lg font-bold text-amber-500">
              Total a pagar:{" "}
              <span className="font-normal text-slate-600">
                {formatearDinero(pedido.total)}
              </span>
            </p>
            <button
              type="button"
              
              onClick={() => {handleClickCompletarPedido(pedido.id)}}
              className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
