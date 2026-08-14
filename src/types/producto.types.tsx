export const MEDICIONES = ['kg', 'unidad'] as const;

export type medicion = (typeof MEDICIONES)[number];

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  tipo_medicion: medicion;
  activo: boolean;
}

