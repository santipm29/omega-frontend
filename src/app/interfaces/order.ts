import {Producto} from './producto';

export class Order {
    fecha: Date;
    tipoPedido: string;
    codProveedor: number;
    codPuntoEntrega: number;
    puntoEntrega: number;
    codUsuario: string;
    productos: Producto[];
    estadobodega: number;
    estadoproveedor: number;
    estadopedido: number;
}