import { useProductos } from "../hooks/useProductos";
import {TablaProducto} from "../components/Tabla/TablaProducto";
import { AccordionProductosEliminados } from "../components/AccordionProductosEliminados";
import { Container, Row, Button} from 'react-bootstrap'
import {ModalEdicionProducto} from '../components/EdicionProducto/ModalEdicionProducto'
import { useState } from "react";
import { type Producto } from "../types/producto.types";

export function PaginaProductos(){
    const {productos, loading, error} = useProductos()
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null)

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    const productosActivos = productos.filter(producto => producto.activo)

    function handlerEditar(producto: Producto){
        setProductoSeleccionado(producto)
    }
    function handlerCancelar(){
        setProductoSeleccionado(null)
    }
    return(
        <Container fluid className='py-3'>
            <Row className='justify-content-center'>
                <div className='col-12 col-lg-10 col-xl-8'>
                    <div className='mb-3 d-flex justify-content-end'>
                        <Button variant='success'>Agregar Producto</Button>
                    </div>
                    <TablaProducto productos={productosActivos} onEditar={handlerEditar}/>
                    <AccordionProductosEliminados productos={productos} onEditar={handlerEditar} />
                    <ModalEdicionProducto producto={productoSeleccionado} show={productoSeleccionado!== null} onHide={handlerCancelar}/>                   
                </div>
            </Row>
        </Container>
    )
}