describe('Battle', function() {

  var battle = new Battle(player, enemy);

  var player = new Character("Bobbie", "player", 30, 20);
  var enemy = new Character("Cheato", "enemy", 50, 10);

  var abilities = [lightAttack];

  var lightAttack = new Ability("lightAttack", "combat", "meleeAttack", "opponent");


  it("will execute attack ability", function() {
    battle.executeAbility(lightAttack, player, enemy);
    expect(enemy.currentHP).to.equal(40);
  });
});
