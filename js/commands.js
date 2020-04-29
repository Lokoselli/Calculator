
function answer(){
  factors.num1 = factors.result != undefined?factors.result:factors.num1
  showCalculus()
  input.innerHTML = factors.num1
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
  factors.num1    = ""
  input.innerHTML = ""
  showCalculus()
  factors.usingAnswer = false
}

function deleteChar(){
  factors.num1 = factors.num1.slice(0,-1)
  input.innerHTML = factors.num1
  showCalculus()
  factors.usingAnswer = false
}