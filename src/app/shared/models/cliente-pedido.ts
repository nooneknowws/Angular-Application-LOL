

export class ClientePedido {
  constructor(

    public quantidade: number,
    public valorTotal: number,
    public data: Date,
    public idCliente?: string,
    public nome?: string,
    ){

  }
}
