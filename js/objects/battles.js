function Battle(player, enemy, playerCombatDocket, enemyCombatDocket) {
  this.player = player;
  this.enemy = enemy;
  this.playerCombatDocket = playerCombatDocket;
  this.enemyCombatDocket = enemyCombatDocket;
}

Battle.prototype.executeAbility = function (ability, user, opponent) {
  if(ability.target === "opponent") {
    var target = opponent;
  } else {
    var target = user;
  }

  var execution = "ability." + ability.method + "(user, target);";
  eval(execution);
};

Battle.prototype.executeCombat = function() {
  var isFirst = "this." + checkFirst(this.player, this.enemy);
  var isSecond = "this." + checkSecond(isFirst);
  var firstDocket = isFirst + "CombatDocket";
  var secondDocket = isSecond + "CombatDocket";
  for(var i = 0; i < eval(firstDocket).length; i++) {
    this.executeAbility(eval(firstDocket)[i], eval(isFirst), eval(isSecond));
  }

  for(var i = 0; i < eval(secondDocket).length; i++) {
    this.executeAbility(eval(secondDocket)[i], eval(isSecond), eval(isFirst));
  }

};

var checkFirst = function(player, enemy) {
  if (player.maxAP > enemy.maxAP) {
    return "player";
  } else if (enemy.maxAP) {
    return "enemy";
  } else {
    return "tie";
  }
}

var checkSecond = function(isFirst) {
  if(isFirst === "tie") {
    return "N/A";
  } else if(isFirst === "player") {
    return "enemy";
  } else {
    return "player";
  }
}
