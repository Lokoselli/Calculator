
function answer(){
  factors.currentNum = factors.result != undefined?factors.result:factors.currentNum
  showCalculus()
  input.innerHTML = factors.currentNum
  factors.usingAnswer = true
}

function clearEverything(){
  clearDic()
  factors.result   = ""
  input.innerHTML  = ""
  showCalculus()
  factors.usingAnswer = false
}

function clearActual(){
  factors.currentNum    = ""
  input.innerHTML = ""
  showCalculus()
  factors.usingAnswer = false
}

function deleteChar(){
  factors.currentNum = factors.currentNum.slice(0,-1)
  input.innerHTML = factors.currentNum
  showCalculus()
  factors.usingAnswer = false
}

function clearScreen(){
    input.innerHTML = "";
}