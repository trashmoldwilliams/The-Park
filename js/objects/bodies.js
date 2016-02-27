function HumanBody() {

  //Head
  this.head = [[currentMP], []];
  this.brain = [[], []];
  this.leftEye = [[sense], []];
  this.rightEye = [[sense], []];
  this.mouth = [[charisma], []];
  this.tounge = [[], []];

  //Torso
  this.torso = [[currentSP], []];
  this.internalTorso = [[maxHP, currentSP], []];
  this.heart = [[], []];
  this.leftArm = [[leftAttack], []];
  this.rightArm = [[rightAttack], []];

  //Hands
  this.leftHand = [[leftDexterity], []];
  this.rightHand = [[rightDexterity], []];

  //Legs
  this.leftLeg = [[maxAP, stealth], []];
  this.rightLeg = [[maxAP, stealth], []];

}
