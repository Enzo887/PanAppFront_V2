import {Accordion} from 'react-bootstrap'

import {type Producto} from '../types/producto.types'

import {TablaProducto} from "../components/Tabla/TablaProducto";

interface AccordionProductosEliminadosProps{
    productos: Producto[]
    onEditar: (producto: Producto) => void
}
export function AccordionProductosEliminados( {productos, onEditar}:AccordionProductosEliminadosProps){
    const productosInactivos = productos.filter(producto => !producto.activo)
    return(  
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <strong>Productos Inactivos</strong>
                    <span className="badge bg-danger ms-2" id="contadorEliminados">{productosInactivos.length}</span>
                </Accordion.Header>
                <Accordion.Body>
                    <TablaProducto productos={productosInactivos} onEditar={onEditar}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}