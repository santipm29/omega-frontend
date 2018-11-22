
export interface Order {
    fechaHoraPedido: string;
    tipoPedido: string;
    puntoEntrega: number;
    codUsuario: string;
    productos: [{
        PLU: number;
        descripcion: string;
        cantidad: number;
    }];
    estadoBodega: number;
    estadoProveedor: number;
    estadoPedido: number;
}