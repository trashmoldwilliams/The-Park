function Battle(player, enemy) {
  this.player = player;
  this.enemy = enemy;
  this.state = "strategy-prep";
  this.docket = [];
}

Battle.prototype.executeStrategy = function () {
  enemy.strategyDocket[0].execute();
  enemy.strategyDocket.splice(0, 1);

};

Battle.prototype.executeCombat = function () {
  this.docket[0].execute();
  this.docket.splice(0, 1);
};

Battle.prototype.loadDocket = function () {
  isFirst = isFirst(this.player, this.enemy);
  isSecond = isSecond(isFirst);

  this.docket = eval(isFirst).combatDocket.concat(eval(isSecond).combatDocket);
};

var checkFirst = function(player, enemy) {
  if (player.stats.maxAP > enemy.stats.maxAP) {
    return "player";
  } else if (enemy.stats.maxAP) {
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

// var executeAbility = function (ability, user, opponent, i, docket) {
//   if(ability.target === "opponent") {
//     var target = opponent;
//   } else {
//     var target = user;
//   }
//
//   var execution = "ability." + ability.method + "(user, target);";
//   var damage = eval(execution);
//   gamelogAttack(docket, user, target, ability, damage, i);
// };
//
// Battle.prototype.executeCombat = function() {
//   //Set State
//   this.state = "execution";
//   updateHUD(this.player, this.enemy, this);
//
//   //Determine Order
//   var isFirst = "this." + checkFirst(this.player, this.enemy);
//   var isSecond = "this." + checkSecond(isFirst);
//   var firstDocket = isFirst + "CombatDocket";
//   var secondDocket = isSecond + "CombatDocket";
//
//   //Execute Abilities
//   for(var i = 0; i < eval(firstDocket).length; i++) {
//     executeAbility(eval(firstDocket)[i], eval(isFirst), eval(isSecond), i, eval(firstDocket));
//   }
//
//   for(var i = 0; i < eval(secondDocket).length; i++) {
//     executeAbility(eval(secondDocket)[i], eval(isSecond), eval(isFirst), i, eval(secondDocket))
//   }
//
//
//   //Reset Turn
//   this.playerCombatDocket = [];
//   this.enemyCombatDocket = [];
//   this.player.stats.currentAP = this.player.stats.maxAP;
//   this.player.stats.tempCurrentAP = this.player.stats.maxAP;
//   this.enemy.stats.currentAP = this.enemy.stats.maxAP;
//   this.enemy.stats.tempCurrentAP = this.enemy.stats.maxAP;
//   this.state = "preperation";
//   updateHUD(this.player, this.enemy, this);
//
// };
