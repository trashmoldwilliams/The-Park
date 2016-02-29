var updateHUD = function(player, enemy, battle) {
  //Player Stats
  $("#currentPlayerHP").text(player.stats.currentHP);
  $("#maxPlayerHP").text(player.stats.maxHP);
  $("#currentPlayerAP").text(player.stats.currentAP);
  $("#maxPlayerAP").text(player.stats.maxAP);
  $("#tempPlayerAP").text(player.stats.tempCurrentAP);
  $("#currentPlayerMP").text(player.stats.currentMP);
  $("#maxPlayerMP").text(player.stats.maxMP);
  $("#tempPlayerMP").text(player.stats.tempCurrentMP);
  $("#currentPlayerSP").text(player.stats.currentSP);
  $("#maxPlayerSP").text(player.stats.maxSP);

  $("#currentPlayerAttack").text(player.stats.attack);
  $("#currentPlayerDefense").text(player.stats.defense);
  $("#currentPlayerStealth").text(player.stats.stealth);
  $("#currentPlayerSense").text(player.stats.sense);
  $("#currentPlayerCharisma").text(player.stats.charisma);
  $("#currentPlayerKnowledge").text(player.stats.knowledge);

  $("#playerStrength").text(player.stats.strength);
  $("#playerEndurance").text(player.stats.endurance);
  $("#playerFinesse").text(player.stats.finesse);
  $("#playerPerception").text(player.stats.perception);
  $("#playerWits").text(player.stats.wits);
  $("#playerIntelligence").text(player.stats.intelligence);


  //Enemy Stats

  $("#currentEnemyHP").text(enemy.stats.currentHP);
  $("#maxEnemyHP").text(enemy.stats.maxHP);
  $("#currentEnemyAP").text(enemy.stats.currentAP);
  $("#maxEnemyAP").text(enemy.stats.maxAP);
  $("#currentEnemyMP").text(enemy.stats.currentMP);
  $("#maxEnemyMP").text(enemy.stats.maxMP);
  $("#currentEnemySP").text(enemy.stats.currentSP);
  $("#maxEnemySP").text(enemy.stats.maxSP);

  $("#currentEnemyAttack").text(enemy.stats.attack);
  $("#currentEnemyDefense").text(enemy.stats.defense);
  $("#currentEnemyStealth").text(enemy.stats.stealth);
  $("#currentEnemySense").text(enemy.stats.sense);
  $("#currentEnemyCharisma").text(enemy.stats.charisma);
  $("#currentEnemyKnowledge").text(enemy.stats.knowledge);

  $("#enemyStrength").text(enemy.stats.strength);
  $("#enemyEndurance").text(enemy.stats.endurance);
  $("#enemyFinesse").text(enemy.stats.finesse);
  $("#enemyPerception").text(enemy.stats.perception);
  $("#enemyWits").text(enemy.stats.wits);
  $("#enemyIntelligence").text(enemy.stats.intelligence);

  //Player Abilities

	$("#leftHandAbilities").text("");
  for(var i = 0; i < player.abilities.length; i++) {
    $("#leftHandAbilities").append('<p id="' + player.abilities[i].id + '" class="' + player.loadout.leftHand + ' leftHand none' + player.abilities[i].type + ' activeAbility">' + player.abilities[i].name + '</p>');
  }

  $("#rightHandAbilities").text("");
  for(var i = 0; i < player.abilities.length; i++) {
    $("#rightHandAbilities").append('<p id="' + player.abilities[i].id + '" class="' + player.loadout.rightHand + ' rightHand none' + player.abilities[i].type + ' activeAbility">' + player.abilities[i].name + '</p>');
  }

  //Combat Docket
  $("#combatDocketLineup").text("");
  for(var i = 0; i < battle.playerCombatDocket.length; i++) {
  	$("#combatDocketLineup").append('<li value="' + (i + 1) + '" class="docketAbility" id=' + battle.playerCombatDocket[i].id + '>' + battle.playerCombatDocket[i].name + '</li>');
  }

  //END TURN Button
  if(battle.state === "execution")
  {
    $('#confirmButton').removeClass();
    $('#confirmButton').addClass("confirmDisabled btn disabled");
  } else if(battle.state === "preperation") {
    $('#confirmButton').removeClass();
    $('#confirmButton').addClass("confirmCombat btn-danger");
  }
}
