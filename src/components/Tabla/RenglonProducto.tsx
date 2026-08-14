import { type Producto } from "../../types/producto.types";

interface RenglonProductoProps {
  producto: Producto;
}

export function RenglonProducto({producto}: RenglonProductoProps){
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
        </tr>
    )
}