let speed  = 0
let bmwspeed =0
let bg=document.getElementById("bg")
let bgspeed=0
let sportcars=document.getElementsByClassName("sportcar")

document.body.onkeydown=function(event){
  if(speed<(window.innerWidth-259) && event.keyCode==32 ){
       speed=speed +20           
  }
  if(bmwspeed<(window.innerWidth-259)  && event.keyCode==38){
bmwspeed=bmwspeed +18        
}
  console.log(event.keyCode)  
//   let car =document.getElementById("car") 
//   car.style.left=speed+"px" 
//   console.log(6974)  
//   let bmw =document.getElementById("bmw") 
//   bmw.style.left=speed+"px" 
}
setInterval(function(){ 
if(speed>30){
  speed=speed-10
  
}
if(bmwspeed>30){
  bmwspeed=bmwspeed-10
}
  let car =document.getElementById("car") 
  car.style.left=speed+"px"            
let bmw =document.getElementById("bmw") 
bmw.style.left=bmwspeed+"px" 
},100)  
setInterval(function(){
sportcars[Math.floor(Math.random()*2)].classList.add("neon")
},1000)
// 1. Найти картинку финиша
// 2. Запрограммировать BMW