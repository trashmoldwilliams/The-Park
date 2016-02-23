var updateHUD = function(player, enemy) {
  //Player Stats
  $("#currentPlayerHP").text(player.stats.currentHP);
  $("#maxPlayerHP").text(player.stats.maxHP);
  $("#currentPlayerAP").text(player.stats.currentAP);
  $("#maxPlayerAP").text(player.stats.maxAP);
  $("#currentPlayerMP").text(player.stats.currentMP);
  $("#maxPlayerMP").text(player.stats.maxMP);
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
    $("#leftHandAbilities").append('<p id="' + player.abilities[i].id + '" class="ability leftHand">' + player.abilities[i].name + '</p>');
  }

  $("#rightHandAbilities").text("");
  for(var i = 0; i < player.abilities.length; i++) {
    $("#rightHandAbilities").append('<p id="' + player.abilities[i].id + '" class="ability rightHand">' + player.abilities[i].name + '</p>');
  }
}
