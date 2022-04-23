//IIFE - immediately invoked function expression
var userActions = (function () {
  var defaultTruck = 4;
  var initialBetAmount = 1000;
  var initialPlayerName = "Player1";
  var colorTrucks = [
    "Cyan",
    "Blue",
    "Green",
    "Purple",
    "Red",
    "Yellow",
    "Silver",
    "Whitesmoke",
  ];
  var trucksBetAmountArray = [];

  function placeBet(trucksBetAmountArray) {
    $("#startRaceBtn").prop("disabled", false);
    var noOfTrucks = trucksBetAmountArray.length;
    for (var i = 0; i < noOfTrucks; i++) {
      document.getElementById("amt" + i).innerHTML =
        trucksBetAmountArray[i]["betAmountOnTruckNumber"];
    }
  }

  function resetRaceSetUp(playerName, numOfTrucks, fundAmount) {
    if (playerName != "" || playerName != " " || playerName == undefined) {
      initialPlayerName = playerName;
      var name = document.getElementById("playerN");
      name.innerHTML = initialPlayerName;
    }
    if (
      numOfTrucks != "" ||
      numOfTrucks != " " ||
      numOfTrucks != "Choose number of truckers" ||
      numOfTrucks == undefined
    ) {
      defaultTruck = numOfTrucks;
    }
    if (fundAmount != "" || fundAmount != " " || fundAmount == undefined) {
      initialBetAmount = fundAmount;
      var fund = document.getElementById("initialFund");
      fund.innerHTML = initialBetAmount;
    }

    if (
      defaultTruck == undefined ||
      defaultTruck == "Choose number of truckers"
    ) {
      defaultTruck = 4;
    }
    if (initialBetAmount == undefined) {
      var fund = document.getElementById("initialFund");
      fund.innerHTML = 1000;
    }

    if (initialPlayerName == undefined) {
      var name = document.getElementById("playerN");
      name.innerHTML = "Player1";
    }

    $(".track").remove();

    for (var i = 0; i < defaultTruck; i++) {
      var truckId = "truck" + i;
      $(".container").append(
        '<div class="track"><div class="truckDiv" style="position: absolute"><label></label><i class="fa fa-truck" aria-hidden="true" ></i></div></div>'
      );
      document.getElementsByTagName("i")[i].setAttribute("id", truckId);
      document.getElementsByTagName("label")[i].setAttribute("id", "amt" + i);
      document
        .getElementsByClassName("truckDiv")
        [i].setAttribute("id", "track" + i);
    }
    $("#startRaceBtn").prop("disabled", true);
  }

  function modalSetUp() {
    var message = document.getElementById("msgDiv");
    message.innerHTML = "";

    if (defaultTruck == undefined) {
      defaultTruck = 4;
    }

    $(".track").remove();

    for (var i = 0; i < defaultTruck; i++) {
      var truckId = "truck" + i;
      $(".container").append(
        '<div class="track"><div class="truckDiv" style="position: absolute"><label class="lblname"></label><i class="fa fa-truck"  aria-hidden="true"></i></div></div>'
      );
      document.getElementsByTagName("i")[i].setAttribute("id", truckId);
      document
        .getElementsByClassName("lblname")
        [i].setAttribute("id", "amt" + i);
      document
        .getElementsByClassName("truckDiv")
        [i].setAttribute("id", "track" + i);
    }

    $(".truckForm").remove();
    $(".modal-body").append(
      '<form class="form-horizontal truckForm" id ="placeBetForm">' + "</form>"
    );
    for (var i = 0; i < defaultTruck; i++) {
      var TruckerNameId = "TruckerName" + i;
      var TruckerNumId = "TruckNum" + i;
      $(".truckForm").append(
        '<div class="form-group truckBets">' +
          '<label class="control-label col-sm-3 truckLabel">Trucker</label>' +
          '<div class="col-sm-9">' +
          '<input type="number" class="form-control" min="0"  value="0"  oninput="validity.valid||(value=\'\');"' +
          'placeholder="$0">' +
          "</div>" +
          "</div>"
      );
      document
        .getElementsByClassName("truckLabel")
        [i].setAttribute("id", TruckerNameId);
      document
        .getElementsByTagName("input")
        [i].setAttribute("id", TruckerNumId);
      document
        .getElementsByTagName("input")
        [i].setAttribute("name", TruckerNumId);
      var colorTruck = "truck" + i;

      var trucNo = i + 1;
      $("#TruckerName" + i).text(
        "Trucker " + trucNo + " (" + colorTrucks[i] + ")"
      );
    }
    $(".truckForm").append(
      ' <div class="form-group">' +
        "            <center>" +
        '            <div class="col-sm-offset-2 col-sm-10">' +
        '            <button type="button" id ="betPlaced" onclick="betSuccess()" class="btn-lg btn-success">Bet</button>' +
        '            <button type="button" class="btn-lg btn-danger" data-dismiss="modal">Cancel</button>' +
        "            </div>" +
        "            </center>" +
        "            </div>"
    );
  }

  function startRace() {
    var labelWidth = $("#amt0").width();
    var trackWidth = $(".track").width();
    var randomTruck = Math.floor(Math.random() * defaultTruck);
    var truckWinner;
    for (var i = 0; i < defaultTruck; i++) {
      var runDistance = 1 + Math.floor(Math.random() * trackWidth);
      var truckId = "truck" + i;
      var amtId = "amt" + i;
      var combineId = "track" + i;
      if (truckId != "truck" + randomTruck) {
        $("#" + combineId).animate({
          marginLeft: runDistance - labelWidth - 1,
        }); // 1 for buffer
      } else {
        $("#" + combineId).animate({ marginLeft: trackWidth - labelWidth + 1 });
        truckWinner = truckId;
      }
    }
    endRace(truckWinner);

    $("#startRaceBtn").prop("disabled", true);
  }

  function endRace(winnerTrucker) {
    var indexofTruck = parseInt(winnerTrucker.substring(5));
    var betamount =
      trucksBetAmountArray[indexofTruck]["betAmountOnTruckNumber"];
    if (betamount > 0) {
      var currentfunds = document.getElementById("initialFund");
      currentfunds.innerHTML =
        parseInt(getPlayerAmount()) + 2 * parseInt(betamount);
      var message = document.getElementById("msgDiv");
      message.innerHTML =
        "***Congrats you Won $" + 2 * parseInt(betamount) + "***";
    }
    var lossAmount = 0;
    var noOfTrucks = userActions.trucksBetAmountArray.length;
    for (var i = 0; i < noOfTrucks; i++) {
      if (i != indexofTruck) {
        lossAmount += parseInt(
          userActions.trucksBetAmountArray[i]["betAmountOnTruckNumber"]
        );
      }
    }
    var currentfunds = document.getElementById("initialFund");

    currentfunds.innerHTML = parseInt(getPlayerAmount()) - lossAmount;
    if (parseInt(currentfunds.innerHTML) == 0) {
      var message = document.getElementById("msgDiv");
      message.innerHTML = "Game Over";
    }
  }

  function setPlayerAmount() {
    //loop through trucksBetAmountArray
    //add bet amount on each truck
  }

  function getPlayerAmount() {
    var currentfunds = document.getElementById("initialFund");
    return currentfunds.innerHTML;
  }

  return {
    placeBet: placeBet,
    resetRaceSetUp: resetRaceSetUp,
    modalSetUp: modalSetUp,
    startRace: startRace,
    endRace: endRace,
    setPlayerAmount: setPlayerAmount,
    getPlayerAmount: getPlayerAmount,
    defaultTruck: defaultTruck,
    trucksBetAmountArray: trucksBetAmountArray,
  };
})();
