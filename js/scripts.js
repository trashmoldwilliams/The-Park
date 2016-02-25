$(document).ready(function() {

	//Define Abilities
	var abilityPool = defineAbilities();

  //Define Characters
	var player = new Character("Bobbie", "player", new Stats(10, 10, 10, 3, 3, 3));
	player.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);
  var enemy = new Character("Zebdiel", "enemy", new Stats(3, 3, 11, 2, 2, 2));
  enemy.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);

  var battle = new Battle(player, enemy);

  updateHUD(player, enemy, battle);

  $(document.body).on('click','.activeAbility', function() {
  	if(abilityPool[event.target.id].type === "combat" && player.stats.tempCurrentAP >= abilityPool[event.target.id].inputVal) {
  		player.stats.tempCurrentAP -= abilityPool[event.target.id].inputVal;
  		battle.playerCombatDocket.push(abilityPool[event.target.id]);
  		updateHUD(player, enemy, battle);

  	}
	});

	$(document.body).on('click','.docketAbility', function() {
		battle.playerCombatDocket.splice(event.target.value - 1, 1);
		player.stats.tempCurrentAP += abilityPool[event.target.id].inputVal;
		updateHUD(player, enemy, battle);
	});

	$(document.body).on('click','.confirmCombat', function() {
		battle.executeCombat();
		updateHUD(player, enemy, battle);
	});
});
