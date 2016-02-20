describe('Battle', function() {

  var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability("Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability("Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  var playerCombatDocket = [lightAttack, lightAttack];
  var enemyCombatDocket = [heavyAttack];

  var abilities = [lightAttack, attack, heavyAttack];

  var player = new Character("Bobbie", "player", 40, 60, 20, abilities);
  var enemy = new Character("Cheato", "enemy", 30, 100, 10, abilities);

  var battle = new Battle(player, enemy, playerCombatDocket, enemyCombatDocket);

  it("will execute melee attacks from combat dockets", function() {
    battle.executeCombat();
    expect(enemy.currentHP).to.equal(10);
    expect(enemy.currentAP).to.equal(50);
    expect(player.currentHP).to.equal(20);
    expect(player.currentAP).to.equal(40);
  });
});

describe('checkSpeed', function() {

    var player = new Character("Bobbie", "player", 40, 60, 20);
    var enemy = new Character("Cheato", "enemy", 30, 100, 10);

    var isFirst = checkFirst(player, enemy);
    var isSecond = checkSecond(isFirst);

  it("will check who currently has the highest max AP", function() {
    expect(isFirst).to.equal("enemy");
  });

  it("will check who currently has the lowest max AP", function() {
    expect(isSecond).to.equal("player");
  });
})
