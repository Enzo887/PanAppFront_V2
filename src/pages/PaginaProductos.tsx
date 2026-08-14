import { useProductos } from "../hooks/useProductos";
import {TablaProducto} from "../components/Tabla/TablaProducto";

export function PaginaProductos(){
    const {productos, loading, error} = useProductos()

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <TablaProducto productos={productos} />
    )
}