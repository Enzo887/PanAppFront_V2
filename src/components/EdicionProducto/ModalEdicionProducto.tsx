import {Modal} from 'react-bootstrap'
import { type Producto } from '../../types/producto.types';
import { FormularioEdicionProducto } from './FormularioEdicionProducto';

interface ModalEdicionProductoProps {
    producto: Producto | null,
    show: boolean,
    onHide: () => void
}

export function ModalEdicionProducto({producto,show,onHide}:ModalEdicionProductoProps){
  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton className='bg-success'>
          <Modal.Title>Editar un Producto</Modal.Title>
        </Modal.Header>
          {producto && (<FormularioEdicionProducto key={producto?.id} producto={producto} onHide={onHide}/>)
          }
      </Modal>
    </> 
  )
}