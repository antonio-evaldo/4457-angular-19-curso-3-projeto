export class Transacao {
  constructor(
    public readonly id: string,
    public readonly nome: string,
    public readonly valor: number,
    public readonly data: Date,
    public readonly categoria: string,
    public readonly conta: string
  ) {}
}
