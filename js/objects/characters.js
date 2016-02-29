function Character(id, name, body, dominantHand, sprites, level, alignment, stats, loadout) {

  //Build
  this.id = id;
  this.name = name;
  this.body = body;
  this.dominantHand = dominantHand;
  this.sprites = sprites;
  this.level = level;
  this.alignment = alignment;
  this.stats = stats;
  this.loadout = loadout;
  this.abilities = [];
  this.inventory = [];
  this.money = 0;

  //Battle Info
  this.location = "N/A";
  this.isSneaking = false;
  this.inCombat = false;
  this.detectsOpponent = false;
  this.isTwoHanding = false;
  this.defenses = [];

  //Battle Dockets
  this.movementDocket = [];
  this.strategyDocket = [];
  this.combatDocket = [];

}

var defineCharacters = function() {


}
