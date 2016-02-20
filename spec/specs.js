describe('Battle', function() {

  var battle = new Battle(player, enemy);

  var player = new Character("Bobbie", "player", 30, 20);
  var enemy = new Character("Cheato", "enemy", 50, 10);

  var abilities = [lightAttack];

  var lightAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", .5);
  var attack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", 1);
  var heavyAttack = new Ability("Light Attack", "combat", "meleeAttack", "opponent", 2);


  it("will execute melee attacks", function() {
    battle.executeAbility(heavyAttack, player, enemy);
    expect(enemy.currentHP).to.equal(10);
  });
});
