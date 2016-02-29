function Ability(id, name, type, method, target, inputType, inputVal, multiplier, adjective, suffix) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.method = method;
  this.target = target;
  this.isAccurate = isAccurate;
  this.inputType = inputType;
  this.inputVal = inputVal;
  this.multiplier = multiplier;
  // this.adjective = adjective;
  // this.suffix = suffix;
}

function SlatedAbility(ability, user, userWeapon, userHand, characterTarget, bodyTarget) {
  this.ability = ability;
  this.user = user;
  this.userWeapon = userWeapon;
  this.characterTarget = characterTarget;
  this.bodyTarget = bodyTarget;

  this.damage = 0;
  this.statDamage = [];
}

SlatedAbility.prototype.execute = function () {
  this.damage = eval(this.userHand + "Attack") * this.ability.multiplier * this.userWeapon.multiplier;

  if(this.bodyTarget != "none") {
    this.statDamage.concat("this." + this.characterTarget + ".body." + this.bodyTarget + "[0]");
    this.characterTarget.stats.currentHP -= this.damage;
    for(var i = 0; i < this.statDamage[0].length; i++) {
      eval(this.characterTarget + this.statDamage[i] + "-=" + this.damage);
    }
  }
};

var defineAbilities = function() {

  var quickAttack = new Ability(0, "Quick Attack", "combat", "meleeAttack", "opponent", "AP", 10, 0.5);
  var attack = new Ability(1, "Attack", "combat", "meleeAttack", "opponent", "AP", 30, 0, 1);
  var heavyAttack = new Ability(2, "Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  var abilityPool = [
    quickAttack,
    attack,
    heavyAttack

  ]

  return abilityPool;
}

// Ability.prototype.meleeAttack = function (user, target) {
//   var input = "user.stats.current" + this.inputType + " -= this.inputVal;"
//   eval(input);
//   target.stats.currentHP -= user.stats.attack * this.multiplier;
//   return (user.stats.attack * this.multiplier);
// };
