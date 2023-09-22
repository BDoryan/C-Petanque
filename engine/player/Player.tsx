export default abstract class Player {

    /**
     * Cette classe permet de créer tout simplement un joueur.
     */

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}