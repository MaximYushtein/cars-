let speed  = 0
let bmwspeed =0
let bg=document.getElementById("bg")
let bgspeed=0
document.body.onkeydown=function(event){
  if(speed<(window.innerWidth-259) && event.keyCode==32 ){
       speed=speed +5           
  }
  if(bmwspeed<(window.innerWidth-259)  && event.keyCode==38){
bmwspeed=bmwspeed+3         
}
  console.log(event.keyCode)  
//   let car =document.getElementById("car") 
//   car.style.left=speed+"px" 
//   console.log(6974)  
//   let bmw =document.getElementById("bmw") 
//   bmw.style.left=speed+"px" 
}
setInterval(function(){
  let car =document.getElementById("car") 
  car.style.left=speed+"px"            
let bmw =document.getElementById("bmw") 
bmw.style.left=bmwspeed+"px" 
},100)  
