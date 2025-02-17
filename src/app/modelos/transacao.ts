export class Transacao {
  constructor(
    public readonly id: string,
    public readonly nome: string,
    public readonly tipo: TipoTransacao,
    public readonly valor: number,
    public readonly data: Date,
    public readonly conta: string
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
