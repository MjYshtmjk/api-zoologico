import { Atracao } from "./Atracao";

export class Zoologico {

    private nome: string;
    private lista_de_atracao: Array<Atracao>;

    constructor(_nome: string, _lista_de_atracao: Array<Atracao>) {
        this.nome = _nome;
        this.lista_de_atracao = _lista_de_atracao;
    }

    /**
     * Define o nome do Zoologico.
     * 
     * @param nome O nome a ser atribuido ao Zoologico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
 * Retorna o nome do Zoologico.
 * 
 * @returns O nome do Zoologico.
 */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a lita de atracao do Zoologico.
     * 
     * @param lista_de_atracao A lista de atracao a ser atribuida ao Zoologico.
     */
    public setLista_de_atracao(_lista_de_atracao: Array<Atracao>): void {
        this.lista_de_atracao = _lista_de_atracao;
    }

    /**
    * Retorna a lista de atracao do Zoologico.
    * 
    * @returns A lista de atracao do Zoologico.
    */
    public getLista_de_atracao(): Array<Atracao> {
        return this.lista_de_atracao;
    }
}    