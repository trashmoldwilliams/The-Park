function Character(id, alignment, hp, attack, abilities) {
  this.id = id;
  this.alignment = alignment;
  this.currentHP = hp;
  this.maxHP = hp;
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

function Ability(id, type, method, target) {
  this.id = id;
  this.type = type;
  this.method = method;
  this.target = target;
}

Ability.prototype.meleeAttack = function (user, target) {
  target.currentHP += -(user.attack / 2);
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
