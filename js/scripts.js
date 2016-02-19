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

function Ability(id, abilityInfo, damageModifier) {
  this.id = id;
  this.abilityInfo = abilityInfo;
  this.damageModifier = damageModifier;
  this.target = "opponent";
}

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

  target.currentHP += -(user.attack/2);
};
