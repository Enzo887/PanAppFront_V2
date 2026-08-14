import {type Producto} from '../../types/producto.types'
import { RenglonProducto } from './RenglonProducto'

interface TablaProductoProps{
    productos: Producto[]
}


export function TablaProducto({productos}: TablaProductoProps){
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>   
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <RenglonProducto key={producto.id} producto={producto} />
                ))}
            </tbody>
        </table>
    )
}