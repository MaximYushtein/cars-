let speed = 0
let stopmeters
let bmwspeed = 0
let bg = document.getElementById("bg")
let bgspeed = 0
let sportcars = document.getElementsByClassName("sportcar")
let meters = 0
let title = document.getElementById("title")
document.body.onkeydown = function (event) {
  if (speed < (window.innerWidth - 259) && event.keyCode == 32 && sportcars[0].className.includes("neon")) {
    speed = speed + 20
  }
  if (bmwspeed < (window.innerWidth - 259) && event.keyCode == 38 && sportcars[1].className.includes("neon")) {
    bmwspeed = bmwspeed + 18
  }
  console.log(event.keyCode)
  //   let car =document.getElementById("car") 
  //   car.style.left=speed+"px" 
  //   console.log(6974)  
  //   let bmw =document.getElementById("bmw") 
  //   bmw.style.left=speed+"px" 
}
setInterval(function () {
  if (speed > 30) {
    speed = speed - 10

  }
  if (bmwspeed > 30) {
    bmwspeed = bmwspeed - 10
  }
  console.log(speed,bmwspeed);
  let car = document.getElementById("car")
  car.style.left = speed + "px"
  let bmw = document.getElementById("bmw")
  bmw.style.left = bmwspeed + "px"
}, 100)
setInterval(function () {
  sportcars[0].className = "sportcar"
  sportcars[1].className = "sportcar"
  sportcars[Math.floor(Math.random() * 2)].classList.add("neon")

}, 1000)
setTimeout(function () {
  stopmeters = setInterval(function () {
    meters = meters + 1

    title.innerHTML = "meters: " + meters
    if (meters == 1500) {
      
      clearInterval(stopmeters)
      if(speed>bmwspeed){
        title.innerHTML="mclaren wins "
      }
      else{
        title.innerHTML="bmw wins "
      }
    }
  }, 100)
}, 2000)
