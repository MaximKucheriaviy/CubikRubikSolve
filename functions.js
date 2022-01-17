function changePinColor(event){
    let target = event.target;
    if(target.id != "r5" && target.id != "w5" && target.id != "g5" && target.id != "b5" && target.id != "o5" && target.id != "y5"){
        if(target.className == "green-block" || target.className == "red-block" || target.className == "white-block" || target.className == "blue-block" || target.className == "orange-block" || target.className == "yellow-block"){
            controlBlock.style.visibility = "visible";
            controlBlock.style.top = event.pageY + "px";
            controlBlock.style.left = event.pageX + "px";
            selectedBlock = target;
            console.log(selectedBlock.parentNode.className)
            selectedBlock.style.borderColor = "white";
        }
        else {
            controlBlock.style.visibility = "";
            selectedBlock.style.borderColor = "";
            selectedBlock = undefined;
        }
    }
}
function selectColor(event) {
    let target = event.target;
    if (target.className == "white-block") {
        selectedBlock.style.backgroundColor = white;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
    }
    else if (target.className == "red-block") {
        selectedBlock.style.backgroundColor = red;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
    }
    else if (target.className == "green-block") {
        selectedBlock.style.backgroundColor = green;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
    }
    else if (target.className == "blue-block") {
        selectedBlock.style.backgroundColor = blue;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
    }
    else if (target.className == "orange-block") {
        selectedBlock.style.backgroundColor = orange;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
    }
    else if (target.className == "yellow-block") {
        selectedBlock.style.backgroundColor = yellow;
        controlBlock.style.visibility = "hidden";
        selectedBlock.style.borderColor = "";
        selectedBlock = undefined;
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
function WC_fromYellowToWhite(){
    // находим и стави красный белый
    if(cube[sides.yellow][7] == "w" && cube[sides.red][1] == "r"){
        redTurn_C();
        redTurn_C();
    }
    else if(cube[sides.yellow][3] == "w" && cube[sides.blue][1] == "r"){
        yellowTurn_aC();
        redTurn_C();
        redTurn_C();
    }
    else if(cube[sides.yellow][1] == "w" && cube[sides.orange][1] == "r"){
        yellowTurn_aC();
        yellowTurn_aC();
        redTurn_C();
        redTurn_C();
    }
    else if(cube[sides.yellow][5] == "w" && cube[sides.green][1] == "r"){
        yellowTurn_C()
        redTurn_C();
        redTurn_C();
    }
    // находим и стави синий белый
    if(cube[sides.yellow][7] == "w" && cube[sides.red][1] == "b"){
        yellowTurn_C()
        blueTurn_C()
        blueTurn_C()
    }
    else if(cube[sides.yellow][3] == "w" && cube[sides.blue][1] == "b"){
        blueTurn_C()
        blueTurn_C()
    }
    else if(cube[sides.yellow][1] == "w" && cube[sides.orange][1] == "b"){
        yellowTurn_aC()
        blueTurn_C()
        blueTurn_C()
    }
    else if(cube[sides.yellow][5] == "w" && cube[sides.green][1] == "b"){
        yellowTurn_aC()
        yellowTurn_aC()
        blueTurn_C()
        blueTurn_C()
    }
    // находим и стави зеленый белый
    if(cube[sides.yellow][7] == "w" && cube[sides.red][1] == "g"){
        yellowTurn_aC()
        greenTurn_C()
        greenTurn_C()
    }
    else if(cube[sides.yellow][3] == "w" && cube[sides.blue][1] == "g"){
        yellowTurn_aC()
        yellowTurn_aC()
        greenTurn_C()
        greenTurn_C()
    }
    else if(cube[sides.yellow][1] == "w" && cube[sides.orange][1] == "g"){
        yellowTurn_C()
        greenTurn_C()
        greenTurn_C()
    }
    else if(cube[sides.yellow][5] == "w" && cube[sides.green][1] == "g"){
        greenTurn_C()
        greenTurn_C()
    }
    // находим и стави оранжевый белый
    if(cube[sides.yellow][7] == "w" && cube[sides.red][1] == "o"){
        yellowTurn_aC()
        yellowTurn_aC()
        orangeTurn_C()
        orangeTurn_C()
    }
    else if(cube[sides.yellow][3] == "w" && cube[sides.blue][1] == "o"){
        yellowTurn_C()
        orangeTurn_C()
        orangeTurn_C()
    }
    else if(cube[sides.yellow][1] == "w" && cube[sides.orange][1] == "o"){
        orangeTurn_C()
        orangeTurn_C()
    }
    else if(cube[sides.yellow][5] == "w" && cube[sides.green][1] == "o"){
        yellowTurn_aC()
        orangeTurn_C()
        orangeTurn_C()
    }
    if(cube[sides.yellow][7] == "w" || cube[sides.yellow][3] == "w" || cube[sides.yellow][1] == "w" || cube[sides.yellow][5] == "w"){
        WC_fromYellowToWhite();
    }
}
function WFromSydeToYellow() {
    //обход красной стороны
    if (cube[sides.red][7] == "w") {
        redTurn_aC();
        greenTurn_C();
        yellowTurn_aC();
        greenTurn_aC();
        redTurn_C();
    }
    else if (cube[sides.red][5] == "w") {
        greenTurn_C();
        yellowTurn_C();
        greenTurn_aC();
    }
    else if (cube[sides.red][3] == "w") {
        blueTurn_aC();
        yellowTurn_aC();
        blueTurn_C();
    }
    else if (cube[sides.red][1] == "w") {
        redTurn_C();
        greenTurn_C();
        yellowTurn_aC();
        greenTurn_aC();
        redTurn_aC();
    }
    //обход синей стороны
    else if (cube[sides.blue][1] == "w") {
        blueTurn_C();
        redTurn_C();
        yellowTurn_aC();
        redTurn_aC();
        blueTurn_aC();
    }
    else if (cube[sides.blue][5] == "w") {
        redTurn_C();
        yellowTurn_C();
        redTurn_aC();
    }
    else if (cube[sides.blue][7] == "w") {
        blueTurn_aC();
        redTurn_C();
        yellowTurn_aC();
        redTurn_aC();
        blueTurn_C();
    }
    else if (cube[sides.blue][3] == "w") {
        orangeTurn_aC();
        yellowTurn_aC();
        orangeTurn_C();
    }
    //обход оранжевой стороны
    else if (cube[sides.orange][1] == "w") {
        orangeTurn_C();
        blueTurn_C();
        yellowTurn_aC();
        blueTurn_aC();
        orangeTurn_aC();
    }
    else if (cube[sides.orange][5] == "w") {
        blueTurn_C();
        yellowTurn_C();
        blueTurn_aC();
    }
    else if (cube[sides.orange][7] == "w") {
        orangeTurn_aC();
        blueTurn_C();
        yellowTurn_aC();
        blueTurn_aC();
        orangeTurn_C();
    }
    else if (cube[sides.orange][3] == "w") {
        greenTurn_aC();
        yellowTurn_aC();
        greenTurn_C();
    }
    //обход зеленой стороны
    else if (cube[sides.green][1] == "w") {
        greenTurn_C();
        orangeTurn_C();
        yellowTurn_aC();
        orangeTurn_aC();
        greenTurn_aC();
    }
    else if (cube[sides.green][5] == "w") {
        orangeTurn_C();
        yellowTurn_C();
        orangeTurn_aC();
    }
    else if (cube[sides.green][7] == "w") {
        greenTurn_aC();
        orangeTurn_C();
        yellowTurn_aC();
        orangeTurn_aC();
        greenTurn_C();
    }
    else if (cube[sides.green][3] == "w") {
        redTurn_aC();
        yellowTurn_aC();
        redTurn_C();
    }
    //обход белой стороны
    else if (cube[sides.white][1] == "w" && cube[sides.red][7] != "r") {
        redTurn_C();
        redTurn_C();
    }
    else if (cube[sides.white][5] == "w" && cube[sides.green][7] != "g") {
        greenTurn_C();
        greenTurn_C()
    }
    else if (cube[sides.white][7] == "w" && cube[sides.orange][7] != "o") {
        orangeTurn_C();
        orangeTurn_C()
    }
    else if (cube[sides.white][3] == "w" && cube[sides.blue][7] != "b") {
        blueTurn_C();
        blueTurn_C();
    }
    WC_fromYellowToWhite();
    
}
function solvWiteCrost(){
    WC_fromYellowToWhite();
    WFromSydeToYellow();
    if ((cube[sides.white][1] != "w" || cube[sides.red][7] != "r") || (cube[sides.white][5] != "w" || cube[sides.green][7] != "g") || (cube[sides.white][7] != "w" || cube[sides.orange][7] != "o") || (cube[sides.white][3] != "w" || cube[sides.blue][7] != "b")) {
        solvWiteCrost()
    }
    
}
function cornerInstall(rightSide, leftSyde, variant) {
    console.log(rightSide, leftSyde, variant)
    if (variant) {
        if (rightSide == sides.orange) {
            orangeTurn_C()
            yellowTurn_C()
            orangeTurn_aC()
        }
        else if (rightSide == sides.green) {
            greenTurn_C()
            yellowTurn_C()
            greenTurn_aC()
        }
        else if (rightSide == sides.red) {
            redTurn_C()
            yellowTurn_C()
            redTurn_aC()
        }
        else if (rightSide == sides.blue) {
            blueTurn_C()
            yellowTurn_C()
            blueTurn_aC()
        }
    }
    else{
        if (leftSyde == sides.orange) {
            orangeTurn_aC()
            yellowTurn_aC()
            orangeTurn_C()
        }
        else if (leftSyde == sides.green) {
            greenTurn_aC()
            yellowTurn_aC()
            greenTurn_C()
        }
        else if (leftSyde == sides.red) {
            redTurn_aC()
            yellowTurn_aC()
            redTurn_C()
        }
        else if (leftSyde == sides.blue) {
            blueTurn_aC()
            yellowTurn_aC()
            blueTurn_C()
        }
    }
}
function cornerPrepareFromSydes() {
    while (cube[sides.red][0] == "w" || cube[sides.red][2] == "w" || cube[sides.blue][0] == "w" || cube[sides.blue][2] == "w" || cube[sides.orange][0] == "w" || cube[sides.orange][2] == "w" || cube[sides.green][0] == "w" || cube[sides.green][2] == "w") {
        // оюход красной  стороны
        if (cube[sides.red][0] == "w") {
            if (cube[sides.blue][2] == "b") {
                cornerInstall(sides.red, sides.blue, true);
            }
            else if (cube[sides.blue][2] == "o") {
                yellowTurn_C();
                cornerInstall(sides.blue, sides.orange, true);
            }
            else if (cube[sides.blue][2] == "g") {
                yellowTurn_C();
                yellowTurn_C();
                cornerInstall(sides.orange, sides.green, true);
            }   
            else if (cube[sides.blue][2] == "r") {
                yellowTurn_aC();
                cornerInstall(sides.green, sides.red, true);
            }   
        }
        else if (cube[sides.red][2] == "w") {
            if (cube[sides.green][0] == "b") {
                yellowTurn_C();
                yellowTurn_C();
                cornerInstall(sides.blue, sides.orange, false);
            }
            else if (cube[sides.green][0] == "o") {
                yellowTurn_aC();
                cornerInstall(sides.orange, sides.green, false);
            }
            else if (cube[sides.green][0] == "g") {
                
                cornerInstall(sides.green, sides.red, false);
            }   
            else if (cube[sides.green][0] == "r") {
                yellowTurn_C();
                cornerInstall(sides.red, sides.blue, false);
            }   
        }
        // оюход синей  стороны
        else if (cube[sides.blue][0] == "w") {
            if (cube[sides.orange][2] == "b") {
                yellowTurn_aC()
                cornerInstall(sides.red, sides.blue, true);
            }
            else if (cube[sides.orange][2] == "o") {
                cornerInstall(sides.blue, sides.orange, true);
            }
            else if (cube[sides.orange][2] == "g") {
                yellowTurn_C();
                cornerInstall(sides.orange, sides.green, true);
            }   
            else if (cube[sides.orange][2] == "r") {
                yellowTurn_C();
                yellowTurn_C();
                cornerInstall(sides.green, sides.red, true);
            }   
        }
        else if (cube[sides.blue][2] == "w") {
            if (cube[sides.red][0] == "b") {
                yellowTurn_C();
                cornerInstall(sides.blue, sides.orange, false);
            }
            else if (cube[sides.red][0] == "o") {
                yellowTurn_C();
                yellowTurn_C();
                cornerInstall(sides.orange, sides.green, false);
            }
            else if (cube[sides.red][0] == "g") {     
                yellowTurn_aC();
                cornerInstall(sides.green, sides.red, false);
            }   
            else if (cube[sides.red][0] == "r") {
                yellowTurn_C();
                cornerInstall(sides.red, sides.blue, false);
            }   
        }
        // оюход оранжевой  стороны
        else if (cube[sides.orange][0] == "w") {
            if (cube[sides.green][2] == "b") {
                yellowTurn_aC()
                yellowTurn_aC()
                cornerInstall(sides.red, sides.blue, true);
            }
            else if (cube[sides.green][2] == "o") {
                yellowTurn_aC()
                cornerInstall(sides.green, sides.orange, true);
            }
            else if (cube[sides.green][2] == "g") {
                cornerInstall(sides.orange, sides.green, true);
            }   
            else if (cube[sides.green][2] == "r") {
                yellowTurn_C();
                cornerInstall(sides.green, sides.red, true);
            }   
        }
        else if (cube[sides.orange][2] == "w") {
            if (cube[sides.blue][0] == "b") {
                cornerInstall(sides.blue, sides.orange, false);
            }
            else if (cube[sides.blue][0] == "o") {
                yellowTurn_C();
                cornerInstall(sides.orange, sides.green, false);
            }
            else if (cube[sides.blue][0] == "g") {     
                yellowTurn_aC();
                yellowTurn_aC()
                cornerInstall(sides.green, sides.red, false);
            }   
            else if (cube[sides.blue][0] == "r") {
                yellowTurn_aC();
                cornerInstall(sides.red, sides.blue, false);
            }   
        }
        // оюход зеленой стороны
        else if (cube[sides.green][0] == "w") {
            if (cube[sides.red][2] == "b") {
                yellowTurn_C()
                cornerInstall(sides.red, sides.blue, true);
            }
            else if (cube[sides.red][2] == "o") {
                yellowTurn_aC()
                yellowTurn_aC()
                cornerInstall(sides.blue, sides.orange, true);
            }
            else if (cube[sides.red][2] == "g") {
                yellowTurn_aC()
                cornerInstall(sides.orange, sides.green, true);
            }   
            else if (cube[sides.red][2] == "r") {
                cornerInstall(sides.green, sides.red, true);
            }   
        }
        else if (cube[sides.green][2] == "w") {
            if (cube[sides.orange][0] == "b") {
                yellowTurn_aC();
                cornerInstall(sides.blue, sides.orange, false);
            }
            else if (cube[sides.orange][0] == "o") {
                cornerInstall(sides.orange, sides.green, false);
            }
            else if (cube[sides.orange][0] == "g") {     
                yellowTurn_C();
                cornerInstall(sides.green, sides.red, false);
            }   
            else if (cube[sides.orange][0] == "r") {
                yellowTurn_C();
                yellowTurn_C();
                cornerInstall(sides.red, sides.blue, false);
            }   
        }
    }
}
function whteCornterUp() {
    if (cube[sides.red][6] == "w") {
        redTurn_C()
        yellowTurn_C()
        redTurn_aC()
    }
    else if (cube[sides.red][8] == "w") {
        redTurn_aC()
        yellowTurn_aC()
        redTurn_C()
    }
    else if (cube[sides.blue][6] == "w") {
        blueTurn_C()
        yellowTurn_C()
        blueTurn_aC()
    }
    else if (cube[sides.blue][8] == "w") {
        blueTurn_aC()
        yellowTurn_aC()
        blueTurn_C()
    }
    else if (cube[sides.orange][6] == "w") {
        orangeTurn_C()
        yellowTurn_C()
        orangeTurn_aC()
    }
    else if (cube[sides.orange][8] == "w") {
        orangeTurn_aC()
        yellowTurn_aC()
        orangeTurn_C()
    }
    else if (cube[sides.green][6] == "w") {
        greenTurn_C()
        yellowTurn_C()
        greenTurn_aC()
    }
    else if (cube[sides.green][8] == "w") {
        greenTurn_aC()
        yellowTurn_aC()
        greenTurn_C()
    }
}
function witeTurnOnYellow(){
    if(cube[sides.yellow][0] == "w"){
        if(cube[sides.white][6] != "w" && cube[sides.orange][8] != "o" && cube[sides.blue][6] != "b"){
            blueTurn_C();
            yellowTurn_aC();
            blueTurn_C();
        } 
        else{
            yellowTurn_C();
        }
    }
    else if(cube[sides.yellow][2] == "w"){
        if(cube[sides.white][8] != "w" && cube[sides.orange][6] != "o" && cube[sides.green][8] != "g"){
            orangeTurn_C();
            yellowTurn_aC();
            orangeTurn_aC();
        } 
        else{
            yellowTurn_C();
        }
    }
    else if(cube[sides.yellow][8] == "w"){
        if(cube[sides.white][2] != "w" && cube[sides.red][8] != "r" && cube[sides.green][6] != "g"){
            greenTurn_C();
            yellowTurn_aC();
            greenTurn_aC();
        } 
        else{
            yellowTurn_C();
        }
    }
    else if(cube[sides.yellow][6] == "w"){
        if(cube[sides.white][0] != "w" && cube[sides.blue][8] != "b" && cube[sides.red][6] != "r"){
            redTurn_C();
            yellowTurn_aC();
            redTurn_aC();
        } 
        else{
            yellowTurn_C();
        }
    }
}
function wrongWhite(){
    if(cube[sides.white][0] == "w" && cube[sides.red][6] != "r"){
        redTurn_C();
        yellowTurn_C();
        redTurn_aC();
    }
    else if(cube[sides.white][2] == "w" && cube[sides.green][6] != "g"){
        greenTurn_C();
        yellowTurn_C();
        greenTurn_aC();
    }
    else if(cube[sides.white][8] == "w" && cube[sides.orange][6] != "o"){
        orangeTurn_C();
        yellowTurn_C();
        orangeTurn_aC();
    }
    else if(cube[sides.white][6] == "w" && cube[sides.blue][6] != "r"){
        blueTurn_C();
        yellowTurn_C();
        blueTurn_aC();
    }
}
function solweWhiteCorners() {
    cornerPrepareFromSydes();
    whteCornterUp();
    witeTurnOnYellow();
    wrongWhite();
    if(cube[sides.white][0] != "w" && cube[sides.white][2] != "w" && cube[sides.white][6] != "w" && cube[sides.white][8] != "w" && cube[sides.red][6] != "r" && cube[sides.blue][6] != "b" && cube[sides.orange][6] != "o" && cube[sides.green][6] != "g"){
        solweWhiteCorners()
    }
}
function solveCube(){
    solvWiteCrost();
    solweWhiteCorners()
}

