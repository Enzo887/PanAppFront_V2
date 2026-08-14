import { Container, Row, Button, Table} from 'react-bootstrap'
import {type Producto} from '../../types/producto.types'
import { RenglonProducto } from './RenglonProducto'

interface TablaProductoProps{
    productos: Producto[]
}


export function TablaProducto({productos}: TablaProductoProps){
    return(
        <Container fluid className='py-3'>
            <Row className='justify-content-center'>
                <div className='col-12 col-lg-10 col-xl-8'>
                    <div className='mb-3 d-flex justify-content-end'>
                        <Button variant='success'/>
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead className="table-primary">
                        <tr className="text-center align-middle">
                            <th scope="col" className="fw-bold text-aling-center">Producto</th>
                            <th scope="col" className="fw-bold">Precio Actual<small className="text-muted"></small></th>
                            <th scope="col" className="fw-bold">Editar</th>
                            <th scope="col" className="fw-bold">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <RenglonProducto key={producto.id} producto={producto} />
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}