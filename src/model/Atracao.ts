import { Habitat } from "./Habitat";

export class Atracao {

    private nome: string;
    private lista_de_habitat: Array<Habitat>;

    constructor(_nome: string, _lista_de_habitat: Array<Habitat>) {
        this.nome = _nome;
        this.lista_de_habitat = _lista_de_habitat;
    }

    /**
     * Define o nome da atração.
     * 
     * @param nome O nome a ser atribuido a atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
    * Retorna o nome da atração.
    * 
    * @returns O nome da atração.
    */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a lista de habitat da atração.
     * 
     * @param lista_de_habitat A lista de habitat a ser atribuida a atração.
     */
    public setLista_de_habitat(_lista_de_habitat: Array<Habitat>): void {
        this.lista_de_habitat = _lista_de_habitat;
    }

    /**
    * Retorna a lista de habitat da atração.
    * 
    * @returns A lista de habitat da atração.
    */
    public getLista_de_habitat(): Array<Habitat> {
        return this.lista_de_habitat;
    }
}    