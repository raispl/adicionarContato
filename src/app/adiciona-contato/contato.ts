export enum Tipo {
    AMIGO = 'Amigo(a)',
    FAMILIA = 'Famlía',
    TRABALHO = 'Trabalho',
    OUTRO = 'Outro'
}

export class Contato {
    constructor(nm: string, tel: string, email: string, anv: string, tipo: Tipo) {
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        this.aniversario = anv;
        this.tipo = tipo;
    }
    private _nome: string = '';
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }


    private _telefone: string = '';
    public get telefone(): string {
        return this._telefone;
    }
    public set telefone(value: string) {
        this._telefone = value;
    }


    private _email: string = '';
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    private _aniversario: string = '';
    public get aniversario(): string {
        return this._aniversario;
    }
    public set aniversario(value: string) {
        this._aniversario = value;
    }


    private _tipo: Tipo = Tipo.AMIGO;
    public get tipo(): Tipo {
        return this._tipo;
    }
    public set tipo(value: Tipo) {
        this._tipo = value;
    }




}