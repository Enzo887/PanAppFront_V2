import {Accordion} from 'react-bootstrap'

import {type Producto} from '../types/producto.types'

import {TablaProducto} from "../components/Tabla/TablaProducto";

interface TablaProductoProps{
    productos: Producto[]
}
export function AccordionProductosEliminados( {productos }:TablaProductoProps){
    const productosInactivos = productos.filter(producto => !producto.activo)
    return(  
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <strong>Productos Inactivos</strong>
                    <span className="badge bg-danger ms-2" id="contadorEliminados">{productosInactivos.length}</span>
                </Accordion.Header>
                <Accordion.Body>
                    <TablaProducto productos={productosInactivos}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}