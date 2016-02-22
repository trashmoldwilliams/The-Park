describe('Battle', function() {

  //Define Abilities
	var abilityPool = defineAbilities();

  //Define Characters
	var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
	player.abilities.push(abilityPool[0], abilityPool[1]);
  var enemy = new Character("Zebdiel", "enemy", new Stats(3, 3, 3, 2, 2, 2));
  player.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);

  updateHUD(player, enemy);
  var currentBattle = new Battle(player, enemy);

  currentBattle.playerCombatDocket.push(abilityPool[0], abilityPool[0]);
  currentBattle.enemyCombatDocket.push(abilityPool[1]);

  it("will execute melee attacks from combat dockets", function() {
    currentBattle.executeCombat();
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
