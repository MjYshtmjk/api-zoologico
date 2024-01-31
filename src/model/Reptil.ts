class Reptil extends Animal {
    private tipoescama: string;

    constructor(_tipoescama: string,
                _nome: string,
                _idade: number,
                _genero: string) {
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