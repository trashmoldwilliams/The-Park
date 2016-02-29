$(document).ready(function() {

	//Define Abilities
	var abilityPool = defineAbilities();

  //Define Characters
	var player = new Character(0, "Bobbie", new HumanBody, "right", "N/A", 15, "player", new Stats(10, 10, 10, 3, 3, 3), new HumanLoadout);
	player.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);
  var enemy = new Character(1, "Zebdiel", new HumanBody, "right", "N/A", 15, "enemy", new Stats(3, 3, 11, 2, 2, 2), new HumanLoadout);
  enemy.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);

	//Define Items
	var baseballBat = new Item(0, "Baseball Bat", "blunt-object", 100, 7, "hands", [abilityPool[0], abilityPool[1], abilityPool[2]], [], 0, 2, 2, 1, 0);

	player.loadout.rightHand = baseballBat;

  var battle = new Battle(player, enemy);

  updateHUD(player, enemy, battle);

  $(document.body).on('click','.activeAbility', function() {
  	if(abilityPool[event.target.id].type === "combat" && player.stats.tempCurrentAP >= abilityPool[event.target.id].inputVal) {
  		player.stats.tempCurrentAP -= abilityPool[event.target.id].inputVal;
			var parameters = this.className.split(/\s+/);
			var input = new SlatedAbility(abilityPool[event.target.id], player, parameters[0], parameters[1], enemy, parameters[2])
  		player.combatDocket.push(input);
  		updateHUD(player, enemy, battle);
  	}
	});

	$(document.body).on('click','.docketAbility', function() {
		player.combatDocket.splice(event.target.value - 1, 1);
		player.stats.tempCurrentAP += abilityPool[event.target.id].inputVal;
		updateHUD(player, enemy, battle);
	});

	$(document.body).on('click','.confirmCombat', function() {
		battle.loadDocket();
		battle.executeCombat();
		updateHUD(player, enemy, battle);
	});

	$(document.body).on('click','.nextCombat', function() {
		battle.executeCombat();
		updateHUD(player, enemy, battle);
	});
});
