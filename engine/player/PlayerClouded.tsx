import Player from "./Player";

export default class PlayerClouded extends Player {

    /**
     * Cette classe représente les joueurs qui sont récupérer depuis
     * le cloud.
     */

    id: number;

    constructor(id: number, name: string){
        super(name);
        this.id = id;
    }

    getId() {
        return this.id;
    }
}