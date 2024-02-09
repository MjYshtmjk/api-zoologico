import { Animal } from "./Animal";

export class Habitat {

    private nome: string;
    private lista_de_animais: Array<Animal>;

    constructor(_nome: string, _lista_de_animais: Array<Animal>) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome O nome a ser atribuido ao habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
 * Retorna o nome do habitat.
 * 
 * @returns O nome do habitat.
 */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a lista de animais do habitat.
     * 
     * @param lista_de_animais A lista de animais a ser atribuida ao habitat.
     */
    public setLista_de_animais(_lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = _lista_de_animais;
    }

    /**
 * Retorna a lista de animais do habitat.
 * 
 * @returns A lista de animais do habitat.
 */
    public getLista_de_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
}    