import { useProductos } from "../hooks/useProductos";
import {TablaProducto} from "../components/Tabla/TablaProducto";
import { AccordionProductosEliminados } from "../components/AccordionProductosEliminados";
import { Container, Row, Button} from 'react-bootstrap'

export function PaginaProductos(){
    const {productos, loading, error} = useProductos()

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    const productosActivos = productos.filter(producto => producto.activo)
    return(
        <Container fluid className='py-3'>
            <Row className='justify-content-center'>
                <div className='col-12 col-lg-10 col-xl-8'>
                    <div className='mb-3 d-flex justify-content-end'>
                        <Button variant='success'>Agregar Producto</Button>
                    </div>
                    <TablaProducto productos={productosActivos}/>
                    <AccordionProductosEliminados productos={productos} />                   
                </div>
            </Row>
        </Container>
    )
}