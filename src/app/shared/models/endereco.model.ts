export class Endereco {
  constructor(
    public id: number,
    public cep: number,
    public rua: string,
    public bairro: string,
    public cidade: string,
    public estado: string
  ) {}
}
