import { StatusPedido } from "./status-pedido";
import { ItemPedido } from "./item-pedido";
import { Usuario } from "./usuario.model";
export class Pedido {
    constructor(

        public id?: number,
        public datadopedido?: Date,
        public statuspedido?: number,
        public usuario?: Usuario,
        public itens?: ItemPedido[],
        public valorTotal?: number,
        public prazoServico?: number,
        public status?: StatusPedido,
    ){

    }

}
