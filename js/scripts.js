$(document).ready(function() {

	//Define Abilities
	var abilityPool = defineAbilities();

  //Define Characters
	var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
	player.abilities.push(abilityPool[0], abilityPool[1]);
  var enemy = new Character("Zebdiel", "enemy", new Stats(3, 3, 3, 2, 2, 2));
  enemy.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);

  updateHUD(player, enemy);
  var currentBattle = new Battle(player, enemy);

});
