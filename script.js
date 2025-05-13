document.addEventListener("DOMContentLoaded", () => {
  const crestType = document.getElementById("crestType");
  const weatheredAmount = document.getElementById("weatheredAmount");
  const carvedAmount = document.getElementById("carvedAmount");
  const runedAmount = document.getElementById("runedAmount");
  const calcBtn = document.getElementById("calculation");
  const result = document.getElementById("result");

  calcBtn.addEventListener("click", () => {
    const weatheredInputAmount = parseInt(weatheredAmount.value) || 0;
    const carvedInputAmount = parseInt(carvedAmount.value) || 0;
    const runedInputAmount = parseInt(runedAmount.value) || 0;
    if (
      isNaN(weatheredInputAmount) ||
      isNaN(carvedInputAmount) ||
      isNaN(runedInputAmount) ||
      weatheredInputAmount < 0 ||
      carvedInputAmount < 0 ||
      runedInputAmount < 0
    ) {
      result.textContent = "Please enter a valid number";
      return;
    }
    const weatheredToCarved = Math.floor(weatheredInputAmount / 45) * 15;
    const carvedTotal = weatheredToCarved + carvedInputAmount;
    const carvedToRuned = Math.floor(carvedTotal / 45) * 15;
    const runedTotal = carvedToRuned + runedInputAmount;
    const runedToGilded = Math.floor(runedTotal / 45) * 15;

    const weatheredRemainder = weatheredInputAmount % 45;
    const carvedRemainder = carvedTotal % 45;
    const runedRemainder = runedTotal % 45;

    let outputText = "<h3>Conversion Results:</h3>";
    outputText += `<p>From Weathered: <span class="amount">${weatheredInputAmount}</span> → 
                    <span class="converted">${weatheredToCarved}</span> Carved 
                    <span class="remainder">(${weatheredRemainder} Weathered remaining)</span></p>`;
    outputText += `<p>Total Carved after conversion: <span class="amount">${carvedTotal}</span> → 
                    <span class="converted">${carvedToRuned}</span> Runed 
                    <span class="remainder">(${carvedRemainder} Carved remaining)</span></p>`;
    outputText += `<p>Total Runed after conversion: <span class="amount">${runedTotal}</span> → 
                    <span class="converted">${runedToGilded}</span> Gilded 
                    <span class="remainder">(${runedRemainder} Runed remaining)</span></p>`;
    outputText += `<p class="final-result">Final Result: You can get 
                    <span class="total">${runedToGilded}</span> Gilded Undermine Crests</p>`;

    result.innerHTML = outputText;
  });
});
