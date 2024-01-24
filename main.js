let minSell = 0;

function calculateMin() {
    debug.log("clicked!");
    
    var quota = document.getElementById("quota").value;
    var moneyWanted = document.getElementById("money").value;
    // check if the entered values are numbers
    if (!isNaN(Number(quota)) && !isNaN(Number(money))) {
      minSell = (5 * moneyWanted + quota) / 6; 
      document.querySelector("h2").textContent = `Minimum scrap to sell: ${minSell}`;
    }
  }
document.getElementById("btn").addEventListener("click", calculateMin);