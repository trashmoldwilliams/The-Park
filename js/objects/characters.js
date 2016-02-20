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