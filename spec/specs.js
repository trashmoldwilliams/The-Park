describe('Battle', function() {

  var battle = new Battle(player, enemy);

  var player = new Character("Bobbie", "player", 30, 20, 20, abilities);
  var enemy = new Character("Cheato", "enemy", 50, 10, 10, abilities);

  var abilities = [lightAttack, attack, heavyAttack];

  var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 10, .5);
  var attack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 30, 1);
  var heavyAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", "AP", 50, 2);


  it("will execute melee attacks", function() {
    battle.executeAbility(lightAttack, player, enemy);
    expect(enemy.currentHP).to.equal(40);
    expect(player.currentAP).to.equal(10);
  });
});
