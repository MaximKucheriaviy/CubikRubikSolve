function sideTurn_C(sideNum){
    let buf = new Array
    buf[2] = cube[sideNum][2]
    buf[1] = cube[sideNum][1] 
    
    cube[sideNum][2] = cube[sideNum][0]
    cube[sideNum][1] = cube[sideNum][3]
    cube[sideNum][0] = cube[sideNum][6]
    cube[sideNum][3] = cube[sideNum][7]
    cube[sideNum][6] = cube[sideNum][8]
    cube[sideNum][7] = cube[sideNum][5]
    cube[sideNum][8] = buf[2]
    cube[sideNum][5] = buf[1]
}
function redTurn_C(){
    let buff = new Array
    buff[0] = cube[sides.yellow][6]
    buff[1] = cube[sides.yellow][7]
    buff[2] = cube[sides.yellow][8]

    cube[sides.yellow][8] = cube[sides.blue][2]
    cube[sides.yellow][7] = cube[sides.blue][5]
    cube[sides.yellow][6] = cube[sides.blue][8]

    cube[sides.blue][8] = cube[sides.white][2]
    cube[sides.blue][5] = cube[sides.white][1]
    cube[sides.blue][2] = cube[sides.white][0]

    cube[sides.white][0] = cube[sides.green][6]
    cube[sides.white][1] = cube[sides.green][3]
    cube[sides.white][2] = cube[sides.green][0]

    cube[sides.green][0] = buff[0]
    cube[sides.green][3] = buff[1]
    cube[sides.green][6] = buff[2]

    sideTurn_C(sides.red)
    solveWay += "r "
}
function redTurn_aC(){
    redTurn_C()
    redTurn_C()
    redTurn_C()
}
function blueTurn_C(){
    let buff = new Array
    buff[0] = cube[sides.yellow][0]
    buff[1] = cube[sides.yellow][3]
    buff[2] = cube[sides.yellow][6]

    cube[sides.yellow][6] = cube[sides.orange][2]
    cube[sides.yellow][3] = cube[sides.orange][5]
    cube[sides.yellow][0] = cube[sides.orange][8]

    cube[sides.orange][8] = cube[sides.white][0]
    cube[sides.orange][5] = cube[sides.white][3]
    cube[sides.orange][2] = cube[sides.white][6]

    cube[sides.white][6] = cube[sides.red][6]
    cube[sides.white][3] = cube[sides.red][3]
    cube[sides.white][0] = cube[sides.red][0]

    cube[sides.red][0] = buff[0]
    cube[sides.red][3] = buff[1]
    cube[sides.red][6] = buff[2]

    sideTurn_C(sides.blue)
    solveWay += "b "
}
function blueTurn_aC(){
    blueTurn_C()
    blueTurn_C()
    blueTurn_C()
}
function orangeTurn_C(){
    let buff = new Array
    buff[2] = cube[sides.yellow][0]
    buff[1] = cube[sides.yellow][1]
    buff[0] = cube[sides.yellow][2]

    cube[sides.yellow][0] = cube[sides.green][2]
    cube[sides.yellow][1] = cube[sides.green][5]
    cube[sides.yellow][2] = cube[sides.green][8]

    cube[sides.green][8] = cube[sides.white][6]
    cube[sides.green][5] = cube[sides.white][7]
    cube[sides.green][2] = cube[sides.white][8]

    cube[sides.white][6] = cube[sides.blue][0]
    cube[sides.white][7] = cube[sides.blue][3]
    cube[sides.white][8] = cube[sides.blue][6]

    cube[sides.blue][0] = buff[0]
    cube[sides.blue][3] = buff[1]
    cube[sides.blue][6] = buff[2]

    sideTurn_C(sides.orange)
}
function orangeTurn_aC(){
    orangeTurn_C()
    orangeTurn_C()
    orangeTurn_C()
}
function greenTurn_C(){
    let buff = new Array
    buff[2] = cube[sides.yellow][2]
    buff[1] = cube[sides.yellow][5]
    buff[0] = cube[sides.yellow][8]

    cube[sides.yellow][2] = cube[sides.red][2]
    cube[sides.yellow][5] = cube[sides.red][5]
    cube[sides.yellow][8] = cube[sides.red][8]

    cube[sides.red][8] = cube[sides.white][8]
    cube[sides.red][5] = cube[sides.white][5]
    cube[sides.red][2] = cube[sides.white][2]

    cube[sides.white][8] = cube[sides.orange][0]
    cube[sides.white][5] = cube[sides.orange][3]
    cube[sides.white][2] = cube[sides.orange][6]

    cube[sides.orange][0] = buff[0]
    cube[sides.orange][3] = buff[1]
    cube[sides.orange][6] = buff[2]

    sideTurn_C(sides.green)
}
function greenTurn_aC(){
    greenTurn_C()
    greenTurn_C()
    greenTurn_C()
}
function yellowTurn_C(){
    let buff = new Array
    buff[2] = cube[sides.orange][2]
    buff[1] = cube[sides.orange][1]
    buff[0] = cube[sides.orange][0]

    cube[sides.orange][0] = cube[sides.blue][0]
    cube[sides.orange][1] = cube[sides.blue][1]
    cube[sides.orange][2] = cube[sides.blue][2]

    cube[sides.blue][0] = cube[sides.red][0]
    cube[sides.blue][1] = cube[sides.red][1]
    cube[sides.blue][2] = cube[sides.red][2]

    cube[sides.red][0] = cube[sides.green][0]
    cube[sides.red][1] = cube[sides.green][1]
    cube[sides.red][2] = cube[sides.green][2]

    cube[sides.green][0] = buff[0]
    cube[sides.green][1] = buff[1]
    cube[sides.green][2] = buff[2]

    sideTurn_C(sides.yellow)
    solveWay += "y "
}
function yellowTurn_aC(){
    let buff = solveWay;
    yellowTurn_C()
    yellowTurn_C()
    yellowTurn_C()
    solveWay = buff
    solveWay += "yi "
}
function whiteTurn_C(){
    let buff = new Array
    buff[0] = cube[sides.red][8]
    buff[1] = cube[sides.red][7]
    buff[2] = cube[sides.red][6]

    cube[sides.red][8] = cube[sides.blue][8]
    cube[sides.red][7] = cube[sides.blue][7]
    cube[sides.red][6] = cube[sides.blue][6]

    cube[sides.blue][8] = cube[sides.orange][8]
    cube[sides.blue][7] = cube[sides.orange][7]
    cube[sides.blue][6] = cube[sides.orange][6]

    cube[sides.orange][8] = cube[sides.green][8]
    cube[sides.orange][7] = cube[sides.green][7]
    cube[sides.orange][6] = cube[sides.green][6]

    cube[sides.green][8] = buff[0]
    cube[sides.green][7] = buff[1]
    cube[sides.green][6] = buff[2]

    sideTurn_C(sides.white)
}
function whiteTurn_aC(){
    whiteTurn_C()
    whiteTurn_C()
    whiteTurn_C()
}