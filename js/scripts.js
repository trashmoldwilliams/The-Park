$(document).ready(function() {

	//Define Abilities
	var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability("Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability("Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  //Define Characters
	var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
	player.abilities.push(lightAttack, attack);
  var enemy = new Character("Cheato", "enemy", new Stats(3, 3, 3, 2, 2, 2));
  player.abilities.push(lightAttack, attack, heavyAttack);

  updateHUD(player);
  var currentBattle = new Battle(player, enemy);

});