cubeMap.onclick = function(event){changePinColor(event)}
createButton.onclick = function(){
    createCube();
    solveCube()
    showCube()
    ecran.textContent = solveWay
}
