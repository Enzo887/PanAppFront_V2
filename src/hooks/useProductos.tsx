import { useEffect, useState } from "react";
import {type Producto} from '../types/producto.types'

export function useProductos(){
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al traer productos");
        return res.json();
      })
      .then((data: { productos: Producto[] }) => setProductos(data.productos))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    {productos, loading, error}
  );
}