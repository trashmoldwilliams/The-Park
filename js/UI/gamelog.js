var gamelogAttack = function(SlatedAbility) {
	var output = "";

  if(i === 0) {
  	if(user.alignment === "player") {
  		output += "you";
  	} else {
  		output += user.id;
  	}
  } else {
  	output += "and then";
  }

  output += " ";

  if(ability.method === "meleeAttack") {
  	if(ability.id === 0) {
  		output += "quickly ";
  	} else if (ability.id === 2) {
  		output += "strongly ";
  	}
  }

  output += "jab";

  if(user.alignment === "enemy") {
  	output += "s";
  }

  output += " ";

  // if(bodyTarget != "none") {
  // 	if(user.alignment === "enemy") {
  // 		output += "your"
  // 	} else {
  // 		if(i === 0) {
  // 			output += target.id;
  // 			output += " in the";
  // 		} else {
  // 			output += "their";
  // 		}
  // 	}

  // 	output += " ";
  // 	output += bodyTarget;
  // } else {
  	if(user.alignment === "enemy") {
  		output += "you";
  	} else {
  		if(i === 0) {
  			output += target.id;
  		}else {
  			output += "them"
  		}
  	}
  // }

  output += " with ";

  if(user.alignment === "player") {
  	output += "your ";
  } else {
  	output += "their ";
  }

	output += "fist";
	output += " for ";

  output += damage;
  output += " HP";

  // if(bodyTarget != "none") {
  // 	output += "and ";
  // 	output += targetDamage;
  // 	output += " ";
  // 	output += targetType;
  // }

  if(i === docket.length - 1) {
  	output += "!";
  } else {
  	output += ",";
  }

  $("#gameLogContent").prepend('<li>' + output + '</li>');
}
