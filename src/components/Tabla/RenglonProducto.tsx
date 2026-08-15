import { type Producto } from "../../types/producto.types";
import { Button } from "react-bootstrap";
interface RenglonProductoProps {
  producto: Producto;
}

export function RenglonProducto({producto}: RenglonProductoProps){
    return (
        <tr className="text-center align-middle">
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td className="d-flex justify-content-center gap-2">
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    )
}