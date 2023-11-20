import { Endereco } from './endereco.model';

export class Usuario {

  constructor(
    public id?: number,
    public nome?: string,
    public login?: string,
    public senha?: string,
    public perfil?: string,
    public cpf?: string,
    public email?: string,
    public telefone?: string,
    public endereco?: Endereco,
    public dataDeNasc?: Date,
    public confirmacao?: string

  ){}
}
