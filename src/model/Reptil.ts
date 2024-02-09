import { Animal } from "./Animal";

export class Reptil extends Animal {
    private tipoescama: string;

    constructor(_nome: string,
        _idade: number,
        _genero: string,
        _tipoescama: string) {
        super(_nome, _idade, _genero);
        this.tipoescama = _tipoescama;
    }

    public setTipoescama(tipo_de_escama: string): void {
        this.tipoescama = tipo_de_escama;
    }

    public getTipoescama(): string {
        return this.tipoescama;
    }
}