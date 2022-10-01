var clicks = 0,
  multiplier = 1,
  totalMultiplier = 1,
  autoclickers = 0,
  autoTime = 5000,
  rebirth = 0,
  aboveTarget = false,
  currentTarget = 1000000,
  tempResetAll = true;

window.onload = function () {
  if ((tempResetAll = true)) {
    rebirth = 0;
    tempResetAll = false;
  }
  if (localStorage.getItem("clicks") != null) {
    clicks = parseFloat(localStorage.getItem("clicks"));
    document.getElementById("clicks").innerHTML = addCommas(
      parseFloat(localStorage.getItem("clicks"))
    );
  }
  if (localStorage.getItem("multiplier") != null) {
    multiplier = parseInt(localStorage.getItem("multiplier"));
    document.getElementById("multiplier").innerHTML = addCommas(
      parseInt(localStorage.getItem("multiplier"))
    );
  }
  if (localStorage.getItem("autoclickers") != null) {
    autoclickers = parseInt(localStorage.getItem("autoclickers"));
    document.getElementById("autoclicker").innerHTML = addCommas(
      parseInt(localStorage.getItem("autoclickers"))
    );
  }
  if (localStorage.getItem("rebirth") != null) {
    rebirth = parseInt(localStorage.getItem("rebirth"));
    document.getElementById("rebirth").innerHTML = addCommas(
      parseInt(localStorage.getItem("rebirth"))
    );
  }
  if (localStorage.getItem("autoTime") != null) {
    autoTime = parseFloat(localStorage.getItem("autoTime")) * 1000;
    for (
      i = 0;
      i < document.getElementsByClassName("auto-time-text").length;
      i++
    ) {
      document.getElementsByClassName("auto-time-text")[i].innerHTML =
        parseFloat(localStorage.getItem("autoTime"));
    }
  }
  if (localStorage.getItem("totalMultiplier") != null) {
    totalMultiplier = parseFloat(localStorage.getItem("totalMultiplier"));
    document.getElementById("total-multiplier").innerHTML = parseFloat(
      localStorage.getItem("totalMultiplier")
    );
  }
  setTimeout(autoClicker, autoTime);
  reachedClickTarget();
  requiresRebirths();
  checkAutoTime();
  checkPlural();
};

function checkAutoTime() {
  if (autoTime <= 4000) {
    document.getElementById("fourAuto").style.display = "none";
  }
  if (autoTime <= 3000) {
    document.getElementById("threeAuto").style.display = "none";
  }
}

function reachedClickTarget() {
  if (rebirth === 0) {
    currentTarget = 1000000;
  }
  if (rebirth >= 1) {
    currentTarget = 10000000;
    for (i = 0; i < document.getElementsByClassName("oneRebirth").length; i++) {
      document.getElementsByClassName("oneRebirth")[i].style.display = "block";
    }
  }
  if (rebirth >= 2) {
    currentTarget = 100000000;
    for (i = 0; i < document.getElementsByClassName("twoRebirth").length; i++) {
      document.getElementsByClassName("twoRebirth")[i].style.display = "block";
    }
  }
  if (rebirth >= 3) {
    currentTarget = 1000000000;
    for (
      i = 0;
      i < document.getElementsByClassName("threeRebirth").length;
      i++
    ) {
      document.getElementsByClassName("threeRebirth")[i].style.display =
        "block";
    }
  }
  if (rebirth == 4) {
    currentTarget = 10000000000;
    for (
      i = 0;
      i < document.getElementsByClassName("fourRebirth").length;
      i++
    ) {
      document.getElementsByClassName("fourRebirth")[i].style.display = "block";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("threeRebirth").length;
      i++
    ) {
      document.getElementsByClassName("threeRebirth")[i].style.display = "none";
    }
  }
  if (rebirth >= 4) {
  }
  if (rebirth >= 5) {
    currentTarget = 99999999999999999999999999999;
  }
  if (rebirth < 1) {
    for (i = 0; i < document.getElementsByClassName("oneRebirth").length; i++) {
      document.getElementsByClassName("oneRebirth")[i].style.display = "none";
    }
  }
  if (rebirth < 2) {
    for (i = 0; i < document.getElementsByClassName("twoRebirth").length; i++) {
      document.getElementsByClassName("twoRebirth")[i].style.display = "none";
    }
  }
  if (rebirth < 3) {
    for (
      i = 0;
      i < document.getElementsByClassName("threeRebirth").length;
      i++
    ) {
      document.getElementsByClassName("threeRebirth")[i].style.display = "none";
    }
  }
  if (rebirth < 4) {
    for (
      i = 0;
      i < document.getElementsByClassName("fourRebirth").length;
      i++
    ) {
      document.getElementsByClassName("fourRebirth")[i].style.display = "none";
    }
  }
  localStorage.setItem("target-clicks", currentTarget);
  document.getElementById("target-clicks").innerHTML = addCommas(
    parseInt(localStorage.getItem("target-clicks"))
  );
}

function requiresRebirths() {}

function increaseRebirth() {
  localStorage.setItem("rebirth", rebirth + 1);
  rebirth++;
  document.getElementById("rebirth").innerHTML = parseInt(
    localStorage.getItem("rebirth")
  );
  backToStart();
  requiresRebirths();
  reachedClickTarget();
}

function myFunction() {
  clicks += parseFloat((multiplier * totalMultiplier).toFixed(2));
  //console.log((multiplier * totalMultiplier).toFixed(2));
  clicks = Math.round(clicks * 100) / 100;

  //fix long weird number

  checkPlural();
}

function clickUpgrade(cost, upgradeAmount) {
  if (clicks >= cost) {
    clicks -= cost;
    multiplier += upgradeAmount;
    checkPlural();
  }
}

function addAutoClicker(cost, upgradeAmount) {
  if (clicks >= cost) {
    clicks -= cost;
    autoclickers += upgradeAmount;
    checkPlural();
  }
}

function reduceAutoTime(cost, time) {
  if (clicks >= cost) {
    clicks -= cost;
    autoTime = time;
    checkPlural();
  }
}

function increaseMultiplier(cost, upgradeAmount) {
  if (clicks >= cost) {
    clicks -= cost;
    totalMultiplier += upgradeAmount;
    totalMultiplier = Math.round(totalMultiplier * 100) / 100;
    checkPlural();
  }
}

function checkPlural() {
  reachedClickTarget();
  if (clicks == 1) {
    document.getElementById("clicks-text").innerHTML = "click";
  } else {
    document.getElementById("clicks-text").innerHTML = "clicks";
  }
  if (multiplier == 1) {
    document.getElementById("multiplier-text").innerHTML = "click per press";
  } else {
    document.getElementById("multiplier-text").innerHTML = "clicks per press";
  }
  if (autoclickers == 1) {
    document.getElementById("autoclicker-plural").innerHTML = "click";
  } else {
    document.getElementById("autoclicker-plural").innerHTML = "clicks";
  }
  if (rebirth == 1) {
    document.getElementById("rebirths-text").innerHTML = "rebirth";
  } else {
    document.getElementById("rebirths-text").innerHTML = "rebirths";
  }

  localStorage.setItem("clicks", clicks.toString());
  document.getElementById("clicks").innerHTML = addCommas(
    parseFloat(localStorage.getItem("clicks"))
  );
  localStorage.setItem("multiplier", multiplier.toString());
  document.getElementById("multiplier").innerHTML = addCommas(
    parseInt(localStorage.getItem("multiplier"))
  );
  localStorage.setItem("autoclickers", autoclickers.toString());
  document.getElementById("autoclicker").innerHTML = addCommas(
    parseInt(localStorage.getItem("autoclickers"))
  );
  localStorage.setItem("rebirth", rebirth.toString());
  document.getElementById("rebirth").innerHTML = addCommas(
    parseInt(localStorage.getItem("rebirth"))
  );
  localStorage.setItem("totalMultiplier", totalMultiplier.toString());
  document.getElementById("total-multiplier").innerHTML = parseFloat(
    localStorage.getItem("totalMultiplier")
  );
  localStorage.setItem("autoTime", (autoTime / 1000).toString());
  for (
    i = 0;
    i < document.getElementsByClassName("auto-time-text").length;
    i++
  ) {
    document.getElementsByClassName("auto-time-text")[i].innerHTML = parseFloat(
      localStorage.getItem("autoTime")
    );
  }

  if (clicks >= currentTarget) {
    aboveTarget = true;
    document.getElementById("reset").style.backgroundColor = "yellow";
    document.getElementById("reset").style.color = "black";
  } else {
    aboveTarget = false;
    document.getElementById("reset").style.backgroundColor = "gray";
    document.getElementById("reset").style.color = "white";
  }

  checkAutoTime();
}

function addCommas(number) {
  /* var tempNumber = number.toString(); var tempString = ""; tempString = tempNumber; if (tempNumber.length % 3 == 0) { for (let i = 0; i < Math.floor(tempNumber.length / 3); i++) { tempString = tempNumber.slice(0, tempNumber.length - i * 3) + ',' + tempNumber.slice(tempNumber.length - i * 3); } } else { for (let i = 0; i < Math.floor(tempNumber.length / 3); i++) { tempString = tempString.slice(0, tempString.length - i * 4 - 3) + ',' + tempString.slice(tempString.length - i * 4 - 3); } } return tempString;  */
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  //long comma adder cuz mine no work so i copy paste
}

function reset() {
  //next stage
  if (aboveTarget == true) {
    backToStart();
    localStorage.setItem("rebirth", rebirth + 1);
    rebirth++;
    document.getElementById("rebirth").innerHTML = parseInt(
      localStorage.getItem("rebirth")
    );
    reachedClickTarget();
  }
}
function resetRebirth() {
  //restart whole game
  rebirth = 0;
  backToStart();
  requiresRebirths();
  reachedClickTarget();
}

function backToStart() {
  //resets variables
  localStorage.setItem("clicks", "0");
  document.getElementById("clicks").innerHTML = parseFloat(
    localStorage.getItem("clicks")
  );
  localStorage.setItem("multiplier", "1");
  document.getElementById("multiplier").innerHTML = parseInt(
    localStorage.getItem("multiplier")
  );
  localStorage.setItem("autoclickers", "0");
  document.getElementById("autoclicker").innerHTML = parseInt(
    localStorage.getItem("autoclickers")
  );
  localStorage.setItem("totalMultiplier", "0");
  document.getElementById("total-multiplier").innerHTML = parseFloat(
    localStorage.getItem("totalMultiplier")
  );
  localStorage.setItem("autoTime", "5");
  localStorage.setItem("totalMultiplier", "5");
  for (
    i = 0;
    i < document.getElementsByClassName("auto-time-text").length;
    i++
  ) {
    document.getElementsByClassName("auto-time-text")[i].innerHTML = parseFloat(
      localStorage.getItem("autoTime")
    );
  }

  autoTime = 5000;
  clicks = 0;
  multiplier = 1;
  totalMultiplier = 1;
  autoclickers = 0;
  checkPlural();
}

function autoClicker() {
  //recursivly autoclicks
  clicks += autoclickers;
  checkPlural();
  setTimeout(autoClicker, autoTime);
}
