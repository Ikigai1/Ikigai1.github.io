let minSell = 0;

function calculateMin() {
    var quota = document.getElementById("quota").value;
    var moneyWanted = document.getElementById("money");
    // check if the entered values are numbers
    if (!isNaN(Number(quota)) && !isNaN(Number(money))) {
      minSell = (5 * moneyWanted + quota) / 6; 
      document.querySelector("h2").textContent = `Minimum scrap to sell: ${minSell}`;
    }
  }