describe('Battle', function() {

  //Define Abilities
	var abilityPool = defineAbilities();

  //Define Characters
	var player = new Character("Bobbie", "player", new Stats(2, 2, 2, 3, 3, 3));
	player.abilities.push(abilityPool[0], abilityPool[1]);
  var enemy = new Character("Zebdiel", "enemy", new Stats(3, 3, 3, 2, 2, 2));
  player.abilities.push(abilityPool[0], abilityPool[1], abilityPool[2]);

  var currentBattle = new Battle(player, enemy);

  currentBattle.playerCombatDocket.push(abilityPool[0], abilityPool[0]);
  currentBattle.enemyCombatDocket.push(abilityPool[1]);

  it("will output a description of a combat ability", function() {
    var text = gamelogAttack(currentBattle.playerCombatDocket, player, enemy, abilityPool[2], 10, 0);
    expect(text).to.equal("");
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
});