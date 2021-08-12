var divArr=document.getElementById("body").getElementsByTagName("div");
width=200
gap=20
for(var i=0;i<divArr.length;i++){
  divArr[i].style.height=Math.random()*150+150 +"px";
  divArr[i].style.backgroundColor="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
  divArr[i].innerHTML=i
}
window.onload = function () {
  waterFall();
}
window.onresize = function () {
  waterFall();
}
function waterFall(){
  var column=Math.floor((window.innerWidth+gap)/(width+gap))
  heightArr=Array(column)
  for(var i=0;i<divArr.length;i++){
    if(i<column){
      divArr[i].style.left=(width+gap)*i+"px"
      divArr[i].style.top=0    
      heightArr[i]=parseInt(divArr[i].style.height.substring(0,divArr[i].style.height.length-2))+gap+"px"
    }
    else{
      console.log(heightArr)
      var min=1000000,num=0
      for(var j=0;j<column;j++){
        if(min>parseInt(heightArr[j].substring(0,heightArr[j].length-2))) {
          min=parseInt(heightArr[j].substring(0,heightArr[j].length-2))
          num=j
        }
      }
        console.log(num,min)
        divArr[i].style.top=heightArr[num]
        divArr[i].style.left=(width+gap)*num+"px"
        heightArr[num]=parseInt(heightArr[num].substring(0,heightArr[num].length-2))+parseInt(divArr[i].style.height.substring(0,divArr[i].style.height.length-2))+gap+"px"
    }
  }
}
