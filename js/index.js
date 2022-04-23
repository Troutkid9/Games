//onClick of start game in Game set up screen and then switch to main screen
function resetRace() {
  var message = document.getElementById("msgDiv");
  message.innerHTML = "";
  var playerName = document.getElementById("playerName").value;
  var numOfTrucks = document.getElementById("noOfTrucks").value;
  var fundAmount = document.getElementById("initialFunds").value;
  userActions.resetRaceSetUp(playerName, numOfTrucks, fundAmount);
  $("#gameSetUpOnreset").hide();
  $("#mainScreen").show();
}

function raceStart() {
  userActions.startRace();
}

function initialSetUp() {
  userActions.resetRaceSetUp();
}

function modalSetup() {
  userActions.modalSetUp();
}

function betSuccess() {
  userActions.trucksBetAmountArray.length = 0;

  var queryString = $("#placeBetForm").serializeArray();
  $.each(queryString, function (key, value) {
    var trucksBetAmountObject = {};
    trucksBetAmountObject["betOnTruckNumber"] = key;
    trucksBetAmountObject["betAmountOnTruckNumber"] = value.value;
    userActions.trucksBetAmountArray.push(trucksBetAmountObject);
  });
  var sumAmount = 0;
  var noOfTrucks = userActions.trucksBetAmountArray.length;
  for (var i = 0; i < noOfTrucks; i++) {
    sumAmount += parseInt(
      userActions.trucksBetAmountArray[i]["betAmountOnTruckNumber"]
    );
  }

  var currAmount = userActions.getPlayerAmount();
  if (sumAmount <= currAmount && sumAmount > 0) {
    //success then dismiss
    $("#betPlaced").attr("data-dismiss", "modal");
    //return the values assigned
  } else {
    alert("No Sufficient Funds available");
    return false;
  }
  userActions.placeBet(userActions.trucksBetAmountArray);
}
