import ContestComposition from "./ContestComposition";
import ContestFormation from "./ContestFormation";
import ContestType from "./ContestType";

export default class ContestConfiguration {

    private type: ContestType;
    private formation: ContestFormation;
    private composition: ContestComposition;

    constructor(type: ContestType, formation: ContestFormation, composition: ContestComposition) {
        this.type = type;
        this.formation = formation;
        this.composition = composition;
    }

    /**
     * Getter $type
     * @return {ContestType}
     */
	public get $type(): ContestType {
		return this.type;
	}

    /**
     * Setter $type
     * @param {ContestType} value
     */
	public set $type(value: ContestType) {
		this.type = value;
	}

    /**
     * Getter $formation
     * @return {ContestFormation}
     */
	public get $formation(): ContestFormation {
		return this.formation;
	}

    /**
     * Setter $formation
     * @param {ContestFormation} value
     */
	public set $formation(value: ContestFormation) {
		this.formation = value;
	}

    /**
     * Getter $composition
     * @return {ContestComposition}
     */
	public get $composition(): ContestComposition {
		return this.composition;
	}

    /**
     * Setter $composition
     * @param {ContestComposition} value
     */
	public set $composition(value: ContestComposition) {
		this.composition = value;
	}

}