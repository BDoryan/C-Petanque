import ContestConfiguration from "./ContestConfiguration";
import Team from "../Team";

export default class Contest {

    private name: string;
    private teams: Team[];
    private configuration: ContestConfiguration|undefined;

    constructor(name: string) {
        this.name = name;
        this.teams = [];
    }
    
    /**
     * Lorsqu'une configuration est défini il vas enclacher certaines conditions 
     * de déroulement. Ce qui veut dire qu'il faut attention si elle vient à être
     * changé.
     */
    public setConfiguration(configuration: ContestConfiguration) {
        if(this.configuration !== undefined){
            // Faire attention ici une configuration à déjà été défini
        }
        this.configuration = configuration;
    }

    /**
     * Getter $configuration
     * @return {ContestConfiguration}
     */
	public get $configuration(): ContestConfiguration|undefined {
		return this.configuration;
	}


    public registerTeam(...players: string[]) {
        // if(players && players.length == )
    }

    public getName() {
        return this.name;
    }
}