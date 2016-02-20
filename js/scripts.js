function Character(id, alignment, hp, ap, attack, abilities) {
  this.id = id;
  this.alignment = alignment;
  this.currentHP = hp;
  this.maxHP = hp;
  this.currentAP = ap;
  this.maxAP = ap;
  this.attack = attack;
  this.abilities = abilities;
}

// Character.prototype.executeAbility = function(abilityID) {
//   for(var i = 0; i < abilities.Length; i++) {
//     if(abilityID === abilities[i].id)
//     {
//       for(var j = 0; j < abilities[i].methods) {
//         abilities[i].methods[j]
//       }
//       break;
//     }
//   }
// };

function Ability(id, type, method, target, inputType, inputVal, multiplier) {
  this.id = id;
  this.type = type;
  this.method = method;
  this.target = target;
  this.inputType = inputType;
  this.inputVal = inputVal;
  this.multiplier = multiplier;
}

Ability.prototype.meleeAttack = function (user, target) {
  var input = "user.current" + this.inputType + "-= this.inputVal;"
  eval(input);
  target.currentHP -= user.attack * this.multiplier;
};

function Battle(player, enemy) {
  this.player = player;
  this.enemy = enemy;
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
