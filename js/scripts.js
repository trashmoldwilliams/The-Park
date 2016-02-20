$(document).ready(function() {

	//Define Abilities
	var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability("Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability("Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  //Define Characters
	var player = new Character("Bobbie", "player", 300, 30, 20);
	player.abilities.push(lightAttack, attack);
  var enemy = new Character("Cheato", "enemy", 50, 50, 50);
  player.abilities.push(lightAttack, attack, heavyAttack);

  updateHUD(player);
  var currentBattle = new Battle(player, enemy);

});