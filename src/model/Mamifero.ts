/**
 * Importa a classe Animal do arquivo Animal.ts para ser utilizada como superclasse nesta classe.
 */
import { Animal } from "./Animal";

/**
 * Classe que representa um mamífero.
 * Esta classe herda da classe Animal.
 */
export class Mamifero extends Animal {

    /**
     * Raça do mamífero.
     */
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * 
     * @param _nome O nome do mamífero.
     * @param _genero O gênero do mamífero.
     * @param _idade A idade do mamífero.
     * @param _raca A raça do mamífero.
     */
    constructor(_nome: string, _genero: string, _idade: number, _raca: string) {
        // Chama o construtor da superclasse (classe Animal) e passa os parâmetros necessários.
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    /**
     * Define a raça do mamífero.
     * 
     * @param _raca A raça a ser atribuída ao mamífero.
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }
}
