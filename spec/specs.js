describe('Battle', function() {

  var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability("Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability("Heavy Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);

  var abilities = [lightAttack, attack, heavyAttack];

  var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
  var enemy = new Character("Cheato", "enemy", new Stats(3, 3, 3, 2, 2, 2));

  var battle = new Battle(player, enemy);
  battle.playerCombatDocket.push(lightAttack, lightAttack);
  battle.enemyCombatDocket.push(attack);

  it("will execute melee attacks from combat dockets", function() {
    battle.executeCombat();
    expect(enemy.stats.currentHP).to.equal(130);
    expect(enemy.stats.currentAP).to.equal(0);
    expect(player.stats.currentHP).to.equal(70);
    expect(player.stats.currentAP).to.equal(0);
  });
});

describe('checkSpeed', function() {

    var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
    var enemy = new Character("Cheato", "enemy", new Stats(3, 3, 3, 2, 2, 2));

    var isFirst = checkFirst(player, enemy);
    var isSecond = checkSecond(isFirst);

  it("will check who currently has the highest max AP", function() {
    expect(isFirst).to.equal("enemy");
  });

  it("will check who currently has the lowest max AP", function() {
    expect(isSecond).to.equal("player");
  });
})
