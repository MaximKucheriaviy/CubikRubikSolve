let cubeMap = document.querySelector(".cubic-partition");
cubeMap.onclick = function(event){
    let target = event.target;
    if(target.id != "r5" && target.id != "w5" && target.id != "g5" && target.id != "b5" && target.id != "o5" && target.id != "y5"){
        if(target.className == "green-block" || target.className == "red-block" || target.className == "white-block" || target.className == "blue-block" || target.className == "orange-block" || target.className == "yellow-block"){
            if(window.getComputedStyle(target).backgroundColor == "rgb(255, 0, 0)"){
                target.style.backgroundColor = "#008000"
            }
            else if(window.getComputedStyle(target).backgroundColor == "rgb(0, 128, 0)"){
                target.style.backgroundColor = "#ffffff"
            }
            else if(window.getComputedStyle(target).backgroundColor == "rgb(255, 255, 255)"){
                target.style.backgroundColor = "#0000ff"
            }
            else if(window.getComputedStyle(target).backgroundColor == "rgb(0, 0, 255)"){
                target.style.backgroundColor = "#ffa500"
            }
            else if(window.getComputedStyle(target).backgroundColor == "rgb(255, 165, 0)"){
                target.style.backgroundColor = "#ffff00"
            }
            else if(window.getComputedStyle(target).backgroundColor == "rgb(255, 255, 0)"){
                target.style.backgroundColor = "#ff0000"
            }
        }
    }
}    


