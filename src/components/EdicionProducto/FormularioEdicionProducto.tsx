import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { type medicion, type Producto } from "../../types/producto.types";

interface FormularioEdicionProductoProps {
  producto: Producto;
  onHide: () => void;
}

export function FormularioEdicionProducto({ producto, onHide }: FormularioEdicionProductoProps) {
  // Estos useState se ejecutan UNA vez por cada "instancia" del componente,
  // es decir, una vez por cada producto.id distinto (gracias a la key).
  const [nombre, setNombre] = useState(producto.nombre);
  const [precio, setPrecio] = useState(producto.precio.toString());
  const [tipoMedicion, setTipoMedicion] = useState(producto.tipo_medicion);
  const [estado, setEstado] = useState(producto.activo)

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombreProducto">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="precioProducto">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="medicion">
            <Form.Label>Medición</Form.Label>
            <Form.Select
              value={tipoMedicion}
              onChange={(e) => setTipoMedicion(e.target.value as medicion)}
            >
              <option value="kg">KG</option>
              <option value="unidad">Unidad</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={estado ? "true" : "false"}
              onChange={(e) => setEstado(e.target.value === "true")}
            >
              <option value="true" >Activado</option>
              <option value="false">Desactivado</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="success" onClick={onHide}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </>
  );
}