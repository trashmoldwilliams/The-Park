function Stats(strength, endurance, finesse, perception, wits, intelligence) {
	this.strength = strength;
	this.endurance = endurance;
	this.finesse = finesse;
	this.perception = perception;
	this.wits = wits;
	this.intelligence = intelligence;


	//Substats
	this.currentHP = endurance * 50;
	this.maxHP = endurance * 50;
	this.currentAP = finesse * 10;
	this.maxAP = finesse * 10;
	this.currentMP = perception * 10 + wits * 10 + intelligence * 10;
	this.maxMP = perception * 10 + wits * 10 + intelligence * 10;
	this.currentSP = endurance;
	this.maxSP = endurance;

	this.carryWeight = strength + endurance;

	this.attack = strength * 10;
	this.defense = 0;
	this.stealth = finesse * 10;
	this.sense = perception * 10;
	this.charisma = wits * 10;
	this.knowledge = 0;
}