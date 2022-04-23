function reset() {
  // Reset
  $(".dealer-cards").html(
    "<div class='card card1'></div><div class='card card2 flipped'></div><div class='new-cards'></div><div class='clear'></div><div id='dealerTotal' class='dealer-total'></div>"
  );

  $(".player-cards").html(
    "<div class='card card1'></div><div class='card card2'></div><div class='new-cards'></div><div class='clear'></div><div id='playerTotal' class='player-total'></div>"
  );

  var reloadGame =
    "<div class='btn' id='hit'>Hit</div><div class='btn' id='stand'>Stand</div>";
  $(".buttons").html(reloadGame);

  $(".dealer-cards").css("width", "");
  $(".player-cards").css("width", "");

  $("#playerTotal").html("");
  $("#dealerTotal").html("");
  $("#message").html("");
}

function deal() {
  reset();

  /// Store cards in array
  var cards = [
    "ace-of-clubs",
    "two-of-clubs",
    "three-of-clubs",
    "four-of-clubs",
    "five-of-clubs",
    "six-of-clubs",
    "seven-of-clubs",
    "eight-of-clubs",
    "nine-of-clubs",
    "ten-of-clubs",
    "jack-of-clubs",
    "queen-of-clubs",
    "king-of-clubs",
    "ace-of-spades",
    "two-of-spades",
    "three-of-spades",
    "four-of-spades",
    "five-of-spades",
    "six-of-spades",
    "seven-of-spades",
    "eight-of-spades",
    "nine-of-spades",
    "ten-of-spades",
    "jack-of-spades",
    "queen-of-spades",
    "king-of-spades",
    "ace-of-hearts",
    "two-of-hearts",
    "three-of-hearts",
    "four-of-hearts",
    "five-of-hearts",
    "six-of-hearts",
    "seven-of-hearts",
    "eight-of-hearts",
    "nine-of-hearts",
    "ten-of-hearts",
    "jack-of-hearts",
    "queen-of-hearts",
    "king-of-hearts",
    "ace-of-diamonds",
    "two-of-diamonds",
    "three-of-diamonds",
    "four-of-diamonds",
    "five-of-diamonds",
    "six-of-diamonds",
    "seven-of-diamonds",
    "eight-of-diamonds",
    "nine-of-diamonds",
    "ten-of-diamonds",
    "jack-of-diamonds",
    "queen-of-diamonds",
    "king-of-diamonds",
  ];

  /// Store correlating values in an array
  var values = [
    11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 10, 10, 10,
  ];

  /// Zero out dealer total
  var dealerTotal = 0;
  $(".dealer-cards .card").each(function () {
    var num = Math.floor(Math.random() * cards.length);
    var cardClass = cards[num];

    $(this).addClass(cardClass);

    $(this).attr("data-value", values[num]);

    dealerTotal = parseInt(dealerTotal) + parseInt(values[num]);

    if (dealerTotal > 21) {
      $(".dealer-cards .card").each(function () {
        if ($(this).attr("data-value") == 11) {
          dealerTotal = parseInt(dealerTotal) - 10;
          $(this).attr("data-value", 1);
        }
      });
    }

    $("#dealerTotal").html(dealerTotal);

    cards.splice(num, 1);
    values.splice(num, 1);
  });

  /// Zero out player total
  var playerTotal = 0;
  $(".player-cards .card").each(function () {
    var num = Math.floor(Math.random() * cards.length);
    var cardClass = cards[num];

    $(this).addClass(cardClass);

    $(this).attr("data-value", values[num]);

    playerTotal = parseInt(playerTotal) + parseInt(values[num]);

    if (playerTotal > 21) {
      $(".player-cards .card").each(function () {
        if ($(this).attr("data-value") == 11) {
          playerTotal = parseInt(playerTotal) - 10;
          $(this).attr("data-value", 1);
        }
      });
    }

    $("#playerTotal").html(playerTotal);

    cards.splice(num, 1);
    values.splice(num, 1);
  });

  /// If player hits
  $("#hit").click(function () {
    var num = Math.floor(Math.random() * cards.length);
    var cardClass = cards[num];

    var newCard =
      "<div class='card " +
      cardClass +
      "' data-value='" +
      values[num] +
      "'></div>";
    $(".player-cards .new-cards").append(newCard);

    playerTotal = parseInt(playerTotal) + parseInt(values[num]);

    if (playerTotal > 21) {
      $(".player-cards .card").each(function () {
        if ($(this).attr("data-value") == 11) {
          playerTotal = parseInt(playerTotal) - 10;
          $(this).attr("data-value", 1);
        }
      });
    }

    cards.splice(num, 1);
    values.splice(num, 1);

    $("#playerTotal").html(playerTotal);
    $(".player-cards").width($(".player-cards").width() + 84);

    if (playerTotal > 21) {
      $("#message").html("Bust!");
      var reloadGame = "<div class='btn' id='deal'>Deal</div>";
      $(".buttons").html(reloadGame);
      /// Pay up
      $("#bet").html("0");
      return false;
    }
  });

  /// If player stands
  $("#stand").click(function () {
    $("#dealerTotal").css("visibility", "visible");
    $(".card2").removeClass("flipped");

    //// Keep adding a card until over 17 or dealer busts
    var keepDealing = setInterval(function () {
      var dealerTotal = $("#dealerTotal").html();
      var playerTotal = $("#playerTotal").html();

      /// If there are aces
      if (dealerTotal > 21) {
        $(".dealer-cards .card").each(function () {
          //// and check if still over 21 in the loop
          if ($(this).attr("data-value") == 11 && dealerTotal > 21) {
            dealerTotal = parseInt(dealerTotal) - 10;
            $(this).attr("data-value", 1);
          }
        });
      }

      if (dealerTotal > 21) {
        $("#message").html("Dealer Bust!");
        var reloadGame = "<div class='btn' id='deal'>Deal</div>";
        $(".buttons").html(reloadGame);
        clearInterval(keepDealing);
        /// Pay up
        var bet = $("#bet").html();
        var money = $("#money").html();
        var winnings = bet * 2;
        $("#bet").html("0");
        $("#money").html(parseInt(winnings) + parseInt(money));
        return false;
      }

      if (dealerTotal >= 17) {
        /// You Win
        if (playerTotal > dealerTotal) {
          $("#message").html("You Win!");

          /// Pay up
          var bet = $("#bet").html();
          var money = $("#money").html();
          var winnings = bet * 2;
          $("#bet").html("0");
          $("#money").html(parseInt(winnings) + parseInt(money));
        }

        /// You Lose
        if (playerTotal < dealerTotal) {
          $("#message").html("You Lose!");
          /// Pay up
          var bet = $("#bet").html();
          var money = $("#money").html();
          $("#bet").html("0");
          $("#money").html(parseInt(money) - parseInt(bet));
        }
        if (playerTotal == dealerTotal) {
          $("#message").html("Push!");
          var bet = $("#bet").html();
          var money = $("#money").html();
          $("#money").html(parseInt(bet) + parseInt(money));
          $("#bet").html("0");
        }
        var reloadGame = "<div class='btn' id='deal'>Deal</div>";
        $(".buttons").html(reloadGame);
        clearInterval(keepDealing);
        return false;
      }

      var num = Math.floor(Math.random() * cards.length);
      var cardClass = cards[num];

      var newCard =
        "<div class='card " +
        cardClass +
        "' data-value='" +
        values[num] +
        "'></div>";
      $(".dealer-cards .new-cards").append(newCard);

      dealerTotal = parseInt(dealerTotal) + parseInt(values[num]);

      $("#dealerTotal").html(dealerTotal);
      $(".dealer-cards").width($(".dealer-cards").width() + 84);

      cards.splice(num, 1);
      values.splice(num, 1);
    }, 300);
  });
}

$(document).ready(function () {
  deal();

  //// Bet
  $("#more").click(function () {
    var bet = 10;
    var currentBet = $("#bet").html();
    var money = $("#money").html();
    if (money == 0) return false;
    if (currentBet) {
      $("#bet").html(parseInt(currentBet) + bet);
    } else {
      $("#bet").html(bet);
    }

    $("#money").html(money - bet);
  });

  $("#less").click(function () {
    var bet = -10;
    var currentBet = $("#bet").html();
    if (currentBet == 0) return false;

    var money = $("#money").html();

    if (currentBet) {
      $("#bet").html(parseInt(currentBet) + bet);
    } else {
      $("#bet").html(bet);
    }

    $("#money").html(money - bet);
  });

  setInterval(function () {
    $("#deal").unbind("click");
    $("#deal").click(function () {
      /// location.reload();
      deal();
    });
  }, 200);
});
