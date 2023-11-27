let speed  = 0
document.body.onkeydown=function(event){
  if(speed<500 && event.keyCode==32 ){
       speed=speed +5           
  }
  console0.log(6974)  
  let car =document.getElementById("car") 
  car.style.left=speed+"px" 
  
}
setInterval(function(){
  
    
  let car =document.getElementById("car") 
  car.style.left=speed+"px" 
},100)              