const km = document.querySelector("#km");
const min = document.querySelector("#min");
const fareDiv = document.getElementById("fare-div");

const calFareBtn = document.querySelector("#cal-fare");

calFareBtn.addEventListener("click", async () => {
  const result = await axios.post("/calfare", { km: km.value, min: min.value });
  fareDiv.innerHTML=`<h1>Total Fare is: ${result.data.totalFare}</h1>`
  
  console.log(result);


});
