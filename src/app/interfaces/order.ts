
export interface Order {
    fechaHoraPedido: string;
    tipoPedido: string;
    puntoEntrega: number;
    codUsuario: string;
    productos: [{
        PLU: number;
        cantidad: number;
    }];
    estadoBodega: number;
    estadoProveedor: number;
    estadoPedido: number;
}