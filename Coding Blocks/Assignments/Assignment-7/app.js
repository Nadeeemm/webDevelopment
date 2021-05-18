const input = document.querySelector('.inputValue');
const main = document.querySelector('.name');
const temp = document.querySelector('.temp');
const visb = document.querySelector('.vis');
const wind = document.querySelector('.wind');
const button= document.querySelector('.submit');


button.addEventListener('click',function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=263dc3ff69a326f2120594fcfb2c406f')


.then(response => response.json())
.then(data =>  {
  console.log(data)
  let tempValue = data['main']['temp'];
  let nameValue = data['name'];
  let visbValue = data['weather'][0]['description'];
  let windSpeed = data['wind']['speed'];

  main.innerHTML = nameValue;
  visb.innerHTML = "Visibility: "+visbValue;
  temp.innerHTML = "Temperature: "+tempValue +"°C"; 
  wind.innerHTML = "Wind Speed: " +windSpeed+ "km/h";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

