import { Manutencao } from "./manutencao.model";
export class ItemPedido {
    constructor(
        public id?: number,
        public idPedido?: number,
        public roupa?: Manutencao,
        public quantidade?: number

    ){

    }
}
