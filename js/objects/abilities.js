function Ability(id, name, type, method, target, inputType, inputVal, multiplier) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.method = method;
  this.target = target;
  this.inputType = inputType;
  this.inputVal = inputVal;
  this.multiplier = multiplier;
}

Ability.prototype.meleeAttack = function (user, target) {
  var input = "user.stats.current" + this.inputType + " -= this.inputVal;"
  eval(input);
  target.stats.currentHP -= user.stats.attack * this.multiplier;
};

var defineAbilities = function() {

  var lightAttack = new Ability(0, "Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability(1, "Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability(2, "Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  var abilityPool = [
    lightAttack,
    attack,
    heavyAttack

  ]

  return abilityPool;
}
