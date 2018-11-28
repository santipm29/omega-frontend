export interface Product {
    codproducto: number;
    descripcion: string;
    codmedida : {
        codmedida: number,
        descripcion: string
    };
    codproveedor : {
        codproveedor: number;
        nit: number;
        razonsocial: string;
    }
}
