function changePinColor(event){
    let target = event.target;
    if(target.id != "r5" && target.id != "w5" && target.id != "g5" && target.id != "b5" && target.id != "o5" && target.id != "y5"){
        if(target.className == "green-block" || target.className == "red-block" || target.className == "white-block" || target.className == "blue-block" || target.className == "orange-block" || target.className == "yellow-block"){
            if(window.getComputedStyle(target).backgroundColor == redRGB){
                target.style.backgroundColor = green
            }
            else if(window.getComputedStyle(target).backgroundColor == greenRGB){
                target.style.backgroundColor = white
            }
            else if(window.getComputedStyle(target).backgroundColor == whiteRGB){
                target.style.backgroundColor = blue
            }
            else if(window.getComputedStyle(target).backgroundColor == blueRGB){
                target.style.backgroundColor = orange
            }
            else if(window.getComputedStyle(target).backgroundColor == orangeRGB){
                target.style.backgroundColor = yellow
            }
            else if(window.getComputedStyle(target).backgroundColor == yellowRGB){
                target.style.backgroundColor = red
            }
        }
    }
}    
function colorToString(obj){
    if(window.getComputedStyle(obj).backgroundColor == redRGB){
        return "r"
    }
    else if(window.getComputedStyle(obj).backgroundColor == greenRGB){
        return "g"
    }
    else if(window.getComputedStyle(obj).backgroundColor == whiteRGB){
        return "w"
    }
    else if(window.getComputedStyle(obj).backgroundColor == blueRGB){
        return "b"
    }
    else if(window.getComputedStyle(obj).backgroundColor == orangeRGB){
        return "o"
    }
    else if(window.getComputedStyle(obj).backgroundColor == yellowRGB){
        return "y"
    }
}
function createCube(){
    cube[0][0] = colorToString(r1)
    cube[0][1] = colorToString(r2)
    cube[0][2] = colorToString(r3)
    cube[0][3] = colorToString(r4)
    cube[0][4] = colorToString(r5)
    cube[0][5] = colorToString(r6)
    cube[0][6] = colorToString(r7)
    cube[0][7] = colorToString(r8)
    cube[0][8] = colorToString(r9)

    cube[1][0] = colorToString(w1)
    cube[1][1] = colorToString(w2)
    cube[1][2] = colorToString(w3)
    cube[1][3] = colorToString(w4)
    cube[1][4] = colorToString(w5)
    cube[1][5] = colorToString(w6)
    cube[1][6] = colorToString(w7)
    cube[1][7] = colorToString(w8)
    cube[1][8] = colorToString(w9)


    cube[2][0] = colorToString(b1)
    cube[2][1] = colorToString(b2)
    cube[2][2] = colorToString(b3)
    cube[2][3] = colorToString(b4)
    cube[2][4] = colorToString(b5)
    cube[2][5] = colorToString(b6)
    cube[2][6] = colorToString(b7)
    cube[2][7] = colorToString(b8)
    cube[2][8] = colorToString(b9)

    cube[3][0] = colorToString(g1)
    cube[3][1] = colorToString(g2)
    cube[3][2] = colorToString(g3)
    cube[3][3] = colorToString(g4)
    cube[3][4] = colorToString(g5)
    cube[3][5] = colorToString(g6)
    cube[3][6] = colorToString(g7)
    cube[3][7] = colorToString(g8)
    cube[3][8] = colorToString(g9)

    cube[4][0] = colorToString(o1)
    cube[4][1] = colorToString(o2)
    cube[4][2] = colorToString(o3)
    cube[4][3] = colorToString(o4)
    cube[4][4] = colorToString(o5)
    cube[4][5] = colorToString(o6)
    cube[4][6] = colorToString(o7)
    cube[4][7] = colorToString(o8)
    cube[4][8] = colorToString(o9)

    cube[5][0] = colorToString(y1)
    cube[5][1] = colorToString(y2)
    cube[5][2] = colorToString(y3)
    cube[5][3] = colorToString(y4)
    cube[5][4] = colorToString(y5)
    cube[5][5] = colorToString(y6)
    cube[5][6] = colorToString(y7)
    cube[5][7] = colorToString(y8)
    cube[5][8] = colorToString(y9)
}

function showCube(){
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 9; j++){
            if(cube[i][j] == "r"){
                cubeObject[i][j].style.background = red
            }
            else if(cube[i][j] == "w"){
                cubeObject[i][j].style.background = white
            }
            else if(cube[i][j] == "b"){
                cubeObject[i][j].style.background = blue
            }
            else if(cube[i][j] == "g"){
                cubeObject[i][j].style.background = green
            }
            else if(cube[i][j] == "o"){
                cubeObject[i][j].style.background = orange
            }
            else if(cube[i][j] == "y"){
                cubeObject[i][j].style.background = yellow
            }
        }
    }
}

