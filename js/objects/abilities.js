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

Ability.prototype.meleeAttack = function (user, target) {
  var input = "user.stats.current" + this.inputType + " -= this.inputVal;"
  eval(input);
  target.stats.currentHP -= user.stats.attack * this.multiplier;
  return (user.stats.attack * this.multiplier);
};

var defineAbilities = function() {

  var quickAttack = new Ability(0, "Quick Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability(1, "Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability(2, "Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  var abilityPool = [
    quickAttack,
    attack,
    heavyAttack

  ]

  return abilityPool;
}
