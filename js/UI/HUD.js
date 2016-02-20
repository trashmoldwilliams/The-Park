var updateHUD = function(player) {
  $("#currentPlayerHP").text(player.currentHP);
  $("#maxPlayerHP").text(player.maxHP);
  $("#currentPlayerAP").text(player.currentAP);
  $("#maxPlayerAP").text(player.maxAP);

}