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
}