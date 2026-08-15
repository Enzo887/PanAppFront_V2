import { type Producto } from "../../types/producto.types";
import { Button } from "react-bootstrap";
interface RenglonProductoProps {
  producto: Producto;
  onEditar: (producto: Producto) => void
}

export function RenglonProducto({producto, onEditar}: RenglonProductoProps){
    return (
        <tr className="text-center align-middle">
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td className="d-flex justify-content-center gap-2">
                <Button variant="warning" onClick={() => onEditar(producto)}>Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    )
}