let minSell = 0;
document.getElementById("btn").addEventListener("click", calculateMin);

function calculateMin() {
    
    var quota = document.getElementById("quota").value;
    var moneyWanted = document.getElementById("money").value;
    // check if the entered values are numbers
    if (!isNaN(Number(quota)) && !isNaN(Number(money))) {
      minSell = (5 * moneyWanted + quota); 
      document.querySelector("h2").textContent = `Minimum scrap to sell: ${minSell}`;
    }
  }
