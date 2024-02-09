/**Importa a classe Animal do arquivo Animal.ts para ser utilizada como superclasse nesta classe. */
import { Animal } from "./Animal";

/**
 * Classe que representa uma ave.
 * Esta classe herda da classe Animal.
 */
export class Ave extends Animal {


    /**
     * Envergadura da ave.
     */
    private envergadura: number;

    /**
     * Construtor da classe Ave.
     * 
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string,
        _idade: number,
        _genero: string,
        _envergadura: number) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
     * Define a envergadura da ave.
     * 
     * @param envergadura A envergadura a ser atribuída à ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }

    /**
    * Obtém a envergadura da ave.
    * 
    * @returns A envergadura da ave.
    */
    public getEnvergadura(): number {
        return this.envergadura;
    }
}