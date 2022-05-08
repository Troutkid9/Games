// Totals
var game_total = 0;

var ones_total = 0;
var twos_total = 0;
var threes_total = 0;
var fours_total = 0;
var fives_total = 0;
var sixes_total = 0;
var three_of_a_kind_total = 0;
var four_of_a_kind_total = 0;
var small_straight_total = 0;
var large_straight_total = 0;
var full_house_total = 0;
var chance_total = 0;
var yahtzee_total = 0;
var subtotal_total = 0;

var rolls_count = 0;

var button_used = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Dice vals
var current_dice = [0, 0, 0, 0, 0];
var held_dice = [0, 0, 0, 0, 0];

let dice_value_1 = document.getElementById("diceValue1");
let dice_value_2 = document.getElementById("diceValue2");
let dice_value_3 = document.getElementById("diceValue3");
let dice_value_4 = document.getElementById("diceValue4");
let dice_value_5 = document.getElementById("diceValue5");

// Dice Pics
let dice_1 = document.getElementById("dicePic1");
let dice_2 = document.getElementById("dicePic2");
let dice_3 = document.getElementById("dicePic3");
let dice_4 = document.getElementById("dicePic4");
let dice_5 = document.getElementById("dicePic5");

// Hold Buttons
let hold_dice_1 = document.getElementById("holdButton1");
let hold_dice_2 = document.getElementById("holdButton2");
let hold_dice_3 = document.getElementById("holdButton3");
let hold_dice_4 = document.getElementById("holdButton4");
let hold_dice_5 = document.getElementById("holdButton5");

// Reset and Roll Buttons
let roll_dice_button = document.getElementById("rollDice");
let reset_rolls_button = document.getElementById("resetRolls");
let reset_game_button = document.getElementById("resetGame");

// Hold and Unhold Buttons
let hold_all_dice = document.getElementById("holdAllButton");
let unhold_all_dice = document.getElementById("unholdAllButton");

// Submit Buttons
let submit_ones = document.getElementById("submitOnes");
let submit_twos = document.getElementById("submitTwos");
let submit_threes = document.getElementById("submitThrees");
let submit_fours = document.getElementById("submitFours");
let submit_fives = document.getElementById("submitFives");
let submit_sixes = document.getElementById("submitSixes");
let submit_three_of_a_kind = document.getElementById("submitThreeOfAKind");
let submit_four_of_a_kind = document.getElementById("submitFourOfAKind");
let submit_small_straight = document.getElementById("submitSmallStraight");
let submit_large_straight = document.getElementById("submitLargeStraight");
let submit_chance = document.getElementById("submitChance");
let submit_full_house = document.getElementById("submitFullHouse");
let submit_yahtzee = document.getElementById("submitYahtzee");
let add_subtotal_button = document.getElementById("addSubtotalButton");

// Score values - Text Boxes (Right Side)
let total_score_value = document.getElementById("totalScoreText");

let total_ones_value = document.getElementById("totalOnesText");
let total_twos_value = document.getElementById("totalTwosText");
let total_threes_value = document.getElementById("totalThreesText");
let total_fours_value = document.getElementById("totalFoursText");
let total_fives_value = document.getElementById("totalFivesText");
let total_sixes_value = document.getElementById("totalSixesText");
let total_three_of_a_kind_value = document.getElementById(
  "totalThreeOfAKindText"
);
let total_four_of_a_kind_value = document.getElementById(
  "totalFourOfAKindText"
);
let total_small_straight_value = document.getElementById(
  "totalSmallStraightText"
);
let total_large_straight_value = document.getElementById(
  "totalLargeStraightText"
);
let total_full_house_value = document.getElementById("totalFullHouseText");
let total_chance_value = document.getElementById("totalChanceText");
let total_yahtzee_value = document.getElementById("totalYahtzeeText");
let total_subtotal_value = document.getElementById("totalSubtotalText");

hold_all_dice.disabled = true;
unhold_all_dice.disabled = true;

add_subtotal_button.disabled = true;
reset_rolls_button.disabled = true;

var subtotal_used = false;

// initializing hold state of dice

hold_dice_1.disabled = true;
hold_dice_2.disabled = true;
hold_dice_3.disabled = true;
hold_dice_4.disabled = true;
hold_dice_5.disabled = true;

// On-click Functions

$(reset_rolls_button).click(function () {
  rolls_count = 0;
  roll_dice_button.disabled = false;

  hold_all_dice.disabled = true;
  unhold_all_dice.disabled = true;
  reset_rolls_button.disabled = true;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;
});

$(roll_dice_button).click(function () {
  current_dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];

  rolls_count += 1;

  if (rolls_count == 1) {
    hold_dice_1.disabled = false;
    hold_dice_2.disabled = false;
    hold_dice_3.disabled = false;
    hold_dice_4.disabled = false;
    hold_dice_5.disabled = false;
  }

  reset_rolls_button.disabled = true;
  hold_all_dice.disabled = false;
  unhold_all_dice.disabled = false;

  // Dice 1
  if (current_dice[0] == 1 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice7.png");
    $(dice_value_1).text("1");
  } else if (current_dice[0] == 2 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice8.png");
    $(dice_value_1).text("2");
  } else if (current_dice[0] == 3 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice9.png");
    $(dice_value_1).text("3");
  } else if (current_dice[0] == 4 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice10.png");
    $(dice_value_1).text("4");
  } else if (current_dice[0] == 5 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice11.png");
    $(dice_value_1).text("5");
  } else if (current_dice[0] == 6 && hold_dice_1.disabled == false) {
    $(dice_1).attr("src", "images/dice12.png");
    $(dice_value_1).text("6");
  }

  // Dice 2

  if (current_dice[1] == 1 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice7.png");
    $(dice_value_2).text("1");
  } else if (current_dice[1] == 2 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice8.png");
    $(dice_value_2).text("2");
  } else if (current_dice[1] == 3 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice9.png");
    $(dice_value_2).text("3");
  } else if (current_dice[1] == 4 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice10.png");
    $(dice_value_2).text("4");
  } else if (current_dice[1] == 5 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice11.png");
    $(dice_value_2).text("5");
  } else if (current_dice[1] == 6 && hold_dice_2.disabled == false) {
    $(dice_2).attr("src", "images/dice12.png");
    $(dice_value_2).text("6");
  }

  // Dice 3

  if (current_dice[2] == 1 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice7.png");
    $(dice_value_3).text("1");
  } else if (current_dice[2] == 2 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice8.png");
    $(dice_value_3).text("2");
  } else if (current_dice[2] == 3 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice9.png");
    $(dice_value_3).text("3");
  } else if (current_dice[2] == 4 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice10.png");
    $(dice_value_3).text("4");
  } else if (current_dice[2] == 5 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice11.png");
    $(dice_value_3).text("5");
  } else if (current_dice[2] == 6 && hold_dice_3.disabled == false) {
    $(dice_3).attr("src", "images/dice12.png");
    $(dice_value_3).text("6");
  }

  // Dice 4

  if (current_dice[3] == 1 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice7.png");
    $(dice_value_4).text("1");
  } else if (current_dice[3] == 2 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice8.png");
    $(dice_value_4).text("2");
  } else if (current_dice[3] == 3 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice9.png");
    $(dice_value_4).text("3");
  } else if (current_dice[3] == 4 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice10.png");
    $(dice_value_4).text("4");
  } else if (current_dice[3] == 5 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice11.png");
    $(dice_value_4).text("5");
  } else if (current_dice[3] == 6 && hold_dice_4.disabled == false) {
    $(dice_4).attr("src", "images/dice12.png");
    $(dice_value_4).text("6");
  }

  // Dice 5

  if (current_dice[4] == 1 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice7.png");
    $(dice_value_5).text("1");
  } else if (current_dice[4] == 2 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice8.png");
    $(dice_value_5).text("2");
  } else if (current_dice[4] == 3 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice9.png");
    $(dice_value_5).text("3");
  } else if (current_dice[4] == 4 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice10.png");
    $(dice_value_5).text("4");
  } else if (current_dice[4] == 5 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice11.png");
    $(dice_value_5).text("5");
  } else if (current_dice[4] == 6 && hold_dice_5.disabled == false) {
    $(dice_5).attr("src", "images/dice12.png");
    $(dice_value_5).text("6");
  }

  if (rolls_count == 3) {
    roll_dice_button.disabled = true;
    held_dice = [0, 0, 0, 0, 0];

    hold_dice_1.disabled = true;
    hold_dice_2.disabled = true;
    hold_dice_3.disabled = true;
    hold_dice_4.disabled = true;
    hold_dice_5.disabled = true;

    held_dice = [
      parseInt(dice_value_1.innerText),
      parseInt(dice_value_2.innerText),
      parseInt(dice_value_3.innerText),
      parseInt(dice_value_4.innerText),
      parseInt(dice_value_5.innerText),
    ];

    hold_all_dice.disabled = true;
    unhold_all_dice.disabled = true;

    reset_rolls_button.disabled = true;
  }

  if (button_used[0] == 1) {
    submit_ones.disabled = true;
  } else {
    submit_ones.disabled = false;
  }

  if (button_used[1] == 1) {
    submit_twos.disabled = true;
  } else {
    submit_twos.disabled = false;
  }

  if (button_used[2] == 1) {
    submit_threes.disabled = true;
  } else {
    submit_threes.disabled = false;
  }

  if (button_used[3] == 1) {
    submit_fours.disabled = true;
  } else {
    submit_fours.disabled = false;
  }

  if (button_used[4] == 1) {
    submit_fives.disabled = true;
  } else {
    submit_fives.disabled = false;
  }

  if (button_used[5] == 1) {
    submit_sixes.disabled = true;
  } else {
    submit_sixes.disabled = false;
  }

  if (button_used[6] == 1) {
    submit_three_of_a_kind.disabled = true;
  } else {
    submit_three_of_a_kind.disabled = false;
  }

  if (button_used[7] == 1) {
    submit_four_of_a_kind.disabled = true;
  } else {
    submit_four_of_a_kind.disabled = false;
  }

  if (button_used[8] == 1) {
    submit_small_straight.disabled = true;
  } else {
    submit_small_straight.disabled = false;
  }

  if (button_used[9] == 1) {
    submit_large_straight.disabled = true;
  } else {
    submit_large_straight.disabled = false;
  }

  if (button_used[10] == 1) {
    submit_full_house.disabled = true;
  } else {
    submit_full_house.disabled = false;
  }

  if (button_used[11] == 1) {
    submit_chance.disabled = true;
  } else {
    submit_chance.disabled = false;
  }

  if (button_used[12] == 1) {
    submit_yahtzee.disabled = true;
  } else {
    submit_yahtzee.disabled = false;
  }
});

// Holding the Dice Logic

$(hold_dice_1).click(function () {
  hold_dice_1.disabled = true;
  held_dice[0] = parseInt(dice_value_1.innerText);

  if (held_dice[0] == 1) {
    $(dice_1).attr("src", "images/dice7.png");
  } else if (held_dice[0] == 2) {
    $(dice_1).attr("src", "images/dice8.png");
  } else if (held_dice[0] == 3) {
    $(dice_1).attr("src", "images/dice9.png");
  } else if (held_dice[0] == 4) {
    $(dice_1).attr("src", "images/dice10.png");
  } else if (held_dice[0] == 5) {
    $(dice_1).attr("src", "images/dice11.png");
  } else if (held_dice[0] == 6) {
    $(dice_1).attr("src", "images/dice12.png");
  }
});

$(hold_dice_2).click(function () {
  hold_dice_2.disabled = true;
  held_dice[1] = parseInt(dice_value_2.innerText);

  if (held_dice[1] == 1) {
    $(dice_2).attr("src", "images/dice7.png");
  } else if (held_dice[1] == 2) {
    $(dice_2).attr("src", "images/dice8.png");
  } else if (held_dice[1] == 3) {
    $(dice_2).attr("src", "images/dice9.png");
  } else if (held_dice[1] == 4) {
    $(dice_2).attr("src", "images/dice10.png");
  } else if (held_dice[1] == 5) {
    $(dice_2).attr("src", "images/dice11.png");
  } else if (held_dice[1] == 6) {
    $(dice_2).attr("src", "images/dice12.png");
  }
});

$(hold_dice_3).click(function () {
  hold_dice_3.disabled = true;
  held_dice[2] = parseInt(dice_value_3.innerText);

  if (held_dice[2] == 1) {
    $(dice_3).attr("src", "images/dice7.png");
  } else if (held_dice[2] == 2) {
    $(dice_3).attr("src", "images/dice8.png");
  } else if (held_dice[2] == 3) {
    $(dice_3).attr("src", "images/dice9.png");
  } else if (held_dice[2] == 4) {
    $(dice_3).attr("src", "images/dice10.png");
  } else if (held_dice[2] == 5) {
    $(dice_3).attr("src", "images/dice11.png");
  } else if (held_dice[2] == 6) {
    $(dice_3).attr("src", "images/dice12.png");
  }
});

$(hold_dice_4).click(function () {
  hold_dice_4.disabled = true;
  held_dice[3] = parseInt(dice_value_4.innerText);

  if (held_dice[3] == 1) {
    $(dice_4).attr("src", "images/dice7.png");
  } else if (held_dice[3] == 2) {
    $(dice_4).attr("src", "images/dice8.png");
  } else if (held_dice[3] == 3) {
    $(dice_4).attr("src", "images/dice9.png");
  } else if (held_dice[3] == 4) {
    $(dice_4).attr("src", "images/dice10.png");
  } else if (held_dice[3] == 5) {
    $(dice_4).attr("src", "images/dice11.png");
  } else if (held_dice[3] == 6) {
    $(dice_4).attr("src", "images/dice12.png");
  }
});

$(hold_dice_5).click(function () {
  hold_dice_5.disabled = true;
  held_dice[4] = parseInt(dice_value_5.innerText);

  if (held_dice[4] == 1) {
    $(dice_5).attr("src", "images/dice7.png");
  } else if (held_dice[4] == 2) {
    $(dice_5).attr("src", "images/dice8.png");
  } else if (held_dice[4] == 3) {
    $(dice_5).attr("src", "images/dice9.png");
  } else if (held_dice[4] == 4) {
    $(dice_5).attr("src", "images/dice10.png");
  } else if (held_dice[4] == 5) {
    $(dice_5).attr("src", "images/dice11.png");
  } else if (held_dice[4] == 6) {
    $(dice_5).attr("src", "images/dice12.png");
  }
});

// Logic for submitting scores for numbers 1-6

$(submit_ones).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 1) {
      ones_total += 1;
    }
  }

  submit_ones.disabled = true;
  subtotal_total += ones_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_ones_value.innerText = "Ones: " + ones_total;
  game_total += ones_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  button_used[0] = 1;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_twos).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 2) {
      twos_total += 2;
    }
  }

  submit_twos.disabled = true;
  subtotal_total += twos_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_twos_value.innerText = "Twos: " + twos_total;
  game_total += twos_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[1] = 1;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_threes).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 3) {
      threes_total += 3;
    }
  }

  submit_threes.disabled = true;
  subtotal_total += threes_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_threes_value.innerText = "Threes: " + threes_total;
  game_total += threes_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[2] = 1;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_fours).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 4) {
      fours_total += 4;
    }
  }

  submit_fours.disabled = true;
  subtotal_total += fours_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_fours_value.innerText = "Fours: " + fours_total;
  game_total += fours_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[3] = 1;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_fives).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 5) {
      fives_total += 5;
    }
  }

  submit_fives.disabled = true;
  subtotal_total += fives_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_fives_value.innerText = "Fives: " + fives_total;
  game_total += fives_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[4] = 1;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_sixes).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    if (held_dice[i] == 6) {
      sixes_total += 6;
    }
  }

  submit_sixes.disabled = true;
  subtotal_total += sixes_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;
  total_sixes_value.innerText = "Sixes: " + sixes_total;
  game_total += sixes_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[5] = 1;

  if (subtotal_total >= 63 && subtotal_used == false) {
    add_subtotal_button.disabled = false;
    alert(
      "Subtotal Bonus is now available! \n\nClick the 'Add Subtotal Bonus' to apply the points."
    );
  } else {
    add_subtotal_button.disabled = true;
  }

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

// Logic for other submit functions

$(submit_chance).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  for (let i = 0; i < held_dice.length; i++) {
    chance_total += held_dice[i];
  }
  submit_chance.disabled = true;
  total_chance_value.innerText = "Chance: " + chance_total;
  game_total += chance_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[11] = 1;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_large_straight).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  var test_total1 = 0;
  var test_total2 = 0;

  test_arr = held_dice.sort();

  for (let i = 0; i < held_dice.length; i++) {
    if (test_arr[i] == i + 1) {
      test_total1 += 8;
    } else if (test_arr[i] == i + 2) {
      test_total2 += 8;
    }
  }

  if (test_total1 == 40 || test_total2 == 40) {
    large_straight_total = 40;
  } else {
    large_straight_total = 0;
  }

  submit_large_straight.disabled = true;
  total_large_straight_value.innerText =
    "Large Straight: " + large_straight_total;
  game_total += large_straight_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[9] = 1;

  var test_total1 = 0;
  var test_total2 = 0;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_three_of_a_kind).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  var remove_duplicates = [...new Set(held_dice)];
  var val_total_1 = 0;
  var val_total_2 = 0;
  var val_total_3 = 0;

  for (let i = 0; i < held_dice.length; i++) {
    if (remove_duplicates[0] == held_dice[i]) {
      val_total_1 += 1;
    }

    if (remove_duplicates.length > 1) {
      if (remove_duplicates[1] == held_dice[i]) {
        val_total_2 += 1;
      }
    }
    if (remove_duplicates.length > 2) {
      if (remove_duplicates[2] == held_dice[i]) {
        val_total_3 += 1;
      }
    }
  }

  if (val_total_1 >= 3 || val_total_2 >= 3 || val_total_3 >= 3) {
    for (let i = 0; i < held_dice.length; i++) {
      three_of_a_kind_total += held_dice[i];
    }
  }

  submit_three_of_a_kind.disabled = true;
  total_three_of_a_kind_value.innerText =
    "Three of a Kind: " + three_of_a_kind_total;
  game_total += three_of_a_kind_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[6] = 1;

  var val_total_1 = 0;
  var val_total_2 = 0;
  var val_total_3 = 0;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_four_of_a_kind).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  var remove_duplicates = [...new Set(held_dice)];
  var val_total_1 = 0;
  var val_total_2 = 0;
  var val_total_3 = 0;

  for (let i = 0; i < held_dice.length; i++) {
    if (remove_duplicates[0] == held_dice[i]) {
      val_total_1 += 1;
    }

    if (remove_duplicates.length > 1) {
      if (remove_duplicates[1] == held_dice[i]) {
        val_total_2 += 1;
      }
    }
    if (remove_duplicates.length > 2) {
      if (remove_duplicates[2] == held_dice[i]) {
        val_total_3 += 1;
      }
    }
  }

  if (val_total_1 >= 4 || val_total_2 >= 4 || val_total_3 >= 4) {
    for (let i = 0; i < held_dice.length; i++) {
      four_of_a_kind_total += held_dice[i];
    }
  }

  submit_four_of_a_kind.disabled = true;
  total_four_of_a_kind_value.innerText =
    "Four of a Kind: " + four_of_a_kind_total;
  game_total += four_of_a_kind_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[7] = 1;

  var val_total_1 = 0;
  var val_total_2 = 0;
  var val_total_3 = 0;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_yahtzee).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  var remove_duplicates = [...new Set(held_dice)];
  check_total_yhtz = 0;

  if (remove_duplicates.length == 1) {
    for (let i = 0; i < held_dice.length; i++) {
      if (held_dice[i] == remove_duplicates[0]) {
        check_total_yhtz += 1;
      }
    }
  }

  if (check_total_yhtz == 5) {
    if (held_dice[0] != 0) {
      yahtzee_total = 50;
    }
  } else {
    yahtzee_total = 0;
  }

  submit_yahtzee.disabled = true;
  total_yahtzee_value.innerText = "Yahtzee: " + yahtzee_total;
  game_total += yahtzee_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[12] = 1;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_small_straight).click(function () {
  var check_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ].sort();

  for (i = 0; i < 4; i++) {
    if (check_dice[i] == check_dice[i + 1]) {
      delete check_dice[i];
      check_dice = check_dice.sort();
    }
  }

  if (
    check_dice[0] < check_dice[1] &&
    check_dice[1] < check_dice[2] &&
    check_dice[2] < check_dice[3]
  ) {
    small_straight_total = 30;
  } else {
    small_straight_total = 0;
  }

  submit_small_straight.disabled = true;
  total_small_straight_value.innerText =
    "Small Straight: " + small_straight_total;
  game_total += small_straight_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[8] = 1;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(submit_full_house).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  var remove_duplicates = [...new Set(held_dice)];
  var FHval_total_1 = 0;
  var FHval_total_2 = 0;

  if (remove_duplicates.length < 3) {
    for (let i = 0; i < held_dice.length; i++) {
      if (held_dice[i] == remove_duplicates[0]) {
        FHval_total_1 += 1;
      }
      if (held_dice[i] == remove_duplicates[1]) {
        FHval_total_2 += 1;
      }
    }
    if (
      (FHval_total_1 == 3 && FHval_total_2 == 2) ||
      (FHval_total_1 == 2 && FHval_total_2 == 3)
    ) {
      full_house_total = 25;
    } else {
      full_house_total = 0;
    }
  } else {
    full_house_total = 0;
  }

  submit_full_house.disabled = true;
  total_full_house_value.innerText = "Full House: " + full_house_total;
  game_total += full_house_total;
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  roll_dice_button.disabled = true;
  held_dice = [0, 0, 0, 0, 0];
  reset_rolls_button.disabled = false;

  button_used[10] = 1;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  unhold_all_dice.disabled = true;
  hold_all_dice.disabled = true;

  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;

  if (button_used.indexOf(0) == -1) {
    alert(
      "The game has now ended.\n\nPlease click the Reset Game Button to play again"
    );
    reset_rolls_button.disabled = true;
    roll_dice_button.disabled = true;
  }
});

$(add_subtotal_button).click(function () {
  if (subtotal_total >= 63) {
    game_total += 35;
  }
  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  add_subtotal_button.disabled = true;
  subtotal_used = true;
});

$(hold_all_dice).click(function () {
  held_dice = [
    parseInt(dice_value_1.innerText),
    parseInt(dice_value_2.innerText),
    parseInt(dice_value_3.innerText),
    parseInt(dice_value_4.innerText),
    parseInt(dice_value_5.innerText),
  ];
  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;
});

$(unhold_all_dice).click(function () {
  held_dice = [0, 0, 0, 0, 0];
  hold_dice_1.disabled = false;
  hold_dice_2.disabled = false;
  hold_dice_3.disabled = false;
  hold_dice_4.disabled = false;
  hold_dice_5.disabled = false;
});

$(reset_game_button).click(function () {
  current_dice = [0, 0, 0, 0, 0];
  held_dice = [0, 0, 0, 0, 0];

  reset_rolls_button.disabled = true;
  roll_dice_button.disabled = false;

  hold_dice_1.disabled = false;
  hold_dice_2.disabled = false;
  hold_dice_3.disabled = false;
  hold_dice_4.disabled = false;
  hold_dice_5.disabled = false;

  // changed
  submit_ones.disabled = true;
  submit_twos.disabled = true;
  submit_threes.disabled = true;
  submit_fours.disabled = true;
  submit_fives.disabled = true;
  submit_sixes.disabled = true;
  submit_small_straight.disabled = true;
  submit_large_straight.disabled = true;
  submit_three_of_a_kind.disabled = true;
  submit_full_house.disabled = true;
  submit_four_of_a_kind.disabled = true;
  submit_chance.disabled = true;
  submit_yahtzee.disabled = true;
  add_subtotal_button.disabled = true;

  hold_all_dice.disabled = true;
  unhold_all_dice.disabled = true;

  game_total = 0;
  ones_total = 0;
  twos_total = 0;
  threes_total = 0;
  fours_total = 0;
  fives_total = 0;
  sixes_total = 0;
  three_of_a_kind_total = 0;
  four_of_a_kind_total = 0;
  small_straight_total = 0;
  large_straight_total = 0;
  full_house_total = 0;
  chance_total = 0;
  yahtzee_total = 0;
  subtotal_total = 0;

  rolls_count = 0;

  hold_dice_1.disabled = true;
  hold_dice_2.disabled = true;
  hold_dice_3.disabled = true;
  hold_dice_4.disabled = true;
  hold_dice_5.disabled = true;

  total_score_value.innerText = "TOTAL SCORE: " + game_total;
  total_ones_value.innerText = "Ones: " + ones_total;
  total_twos_value.innerText = "Twos: " + twos_total;
  total_threes_value.innerText = "Threes: " + threes_total;
  total_fours_value.innerText = "Fours: " + fours_total;
  total_fives_value.innerText = "Fives: " + fives_total;
  total_sixes_value.innerText = "Sixes: " + sixes_total;
  total_full_house_value.innerText = "Full House: " + full_house_total;
  total_small_straight_value.innerText =
    "Small Straight: " + small_straight_total;
  total_large_straight_value.innerText =
    "Large Straight: " + large_straight_total;
  total_chance_value.innerText = "Chance: " + ones_total;
  total_three_of_a_kind_value.innerText =
    "Three of a Kind: " + three_of_a_kind_total;
  total_four_of_a_kind_value.innerText =
    "Four of a Kind: " + four_of_a_kind_total;
  total_yahtzee_value.innerText = "Yahtzee: " + yahtzee_total;
  total_subtotal_value.innerText = "Subtotal: " + subtotal_total;

  button_used = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  subtotal_used = false;
});

submit_ones.disabled = true;
submit_twos.disabled = true;
submit_threes.disabled = true;
submit_fours.disabled = true;
submit_fives.disabled = true;
submit_sixes.disabled = true;
submit_small_straight.disabled = true;
submit_large_straight.disabled = true;
submit_three_of_a_kind.disabled = true;
submit_full_house.disabled = true;
submit_four_of_a_kind.disabled = true;
submit_chance.disabled = true;
submit_yahtzee.disabled = true;
add_subtotal_button.disabled = true;
