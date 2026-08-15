import {Table} from 'react-bootstrap'
import {type Producto} from '../../types/producto.types'
import { RenglonProducto } from './RenglonProducto'

interface TablaProductoProps{
    productos: Producto[]
}


export function TablaProducto({productos}: TablaProductoProps){
    return(
        <div className="rounded overflow-hidden">
            <Table striped bordered hover className='rounded'>
                <thead className="table-primary">
                    <tr className="text-center align-middle fw-bold">
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Actual<small className="text-muted"></small></th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <RenglonProducto key={producto.id} producto={producto} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}