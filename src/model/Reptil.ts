// Importa a classe Animal do arquivo Animal.ts para ser utilizada como superclasse nesta classe.
import { Animal } from "./Animal";

/**
 * Classe que representa um réptil.
 * Esta classe herda da classe Animal.
 */
export class Reptil extends Animal {

    /**
     * Tipo de escama do réptil.
     */
    private tipoescama: string;

    /**
     * Construtor da classe Reptil.
     * 
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipoescama O tipo de escama do réptil.
     */
    constructor(_nome: string, _idade: number, _genero: string, _tipoescama: string) {
        // Chama o construtor da superclasse (classe Animal) e passa os parâmetros necessários.
        super(_nome, _idade, _genero);
        this.tipoescama = _tipoescama;
    }

    /**
     * Define o tipo de escama do réptil.
     * 
     * @param tipo_de_escama O tipo de escama a ser atribuído ao réptil.
     */
    public setTipoescama(tipo_de_escama: string): void {
        this.tipoescama = tipo_de_escama;
    }

    /**
     * Obtém o tipo de escama do réptil.
     * 
     * @returns O tipo de escama do réptil.
     */
    public getTipoescama(): string {
        return this.tipoescama;
    }
}
