import { UnidadeFederativa } from "./unidade-federativa.model";

export interface PessoaUsuaria {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: UnidadeFederativa;
}
