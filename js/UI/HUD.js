var updateHUD = function(player) {
  $("#currentPlayerHP").text(player.stats.currentHP);
  $("#maxPlayerHP").text(player.stats.maxHP);
  $("#currentPlayerAP").text(player.stats.currentAP);
  $("#maxPlayerAP").text(player.stats.maxAP);
  $("#currentPlayerMP").text(player.stats.currentMP);
  $("#maxPlayerMP").text(player.stats.maxMP);
  $("#currentPlayerSP").text(player.stats.currentSP);
  $("#maxPlayerSP").text(player.stats.maxSP);

}