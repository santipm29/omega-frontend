import {Producto} from './producto';

export class Order {
    fechaHoraPedido: string;
    tipoPedido: string;
    puntoEntrega: number;
    codUsuario: string;
    productos: Producto[];
    estadoBodega: number;
    estadoProveedor: number;
    estadoPedido: number;
}