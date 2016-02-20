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
  var input = "user.stats.current" + this.inputType + " -= this.inputVal;"
  eval(input);
  target.stats.currentHP -= user.stats.attack * this.multiplier;
};

var defineAbilities = function() {
  
}