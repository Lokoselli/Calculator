var input = document.getElementById('line2')
var result       = document.getElementById('result')
var factors = {
  currentNum : "",
  previousNum : "",
  operation: "",
  usingAnswer: false
}



function showCalculus(value){
  var calculus;   
  switch(value){
    case '√': calculus = value + " " + factors.currentNum;break;
    case '%': calculus = factors.previousNum.length > 0 ? factors.previousNum + " " + value + " " + factors.currentNum : factors.currentNum + " " + value;break
    case '²': calculus = factors.currentNum + value;console.log(factors.currentNum); break
    default : calculus = factors.previousNum.length > 0? factors.previousNum + " " + factors.receivedOperator + " " + factors.currentNum: factors.currentNum + " " + factors.receivedOperator; break
  }
  if(factors.currentNum == "" && factors.previousNum == ""){clearDic();result.innerHTML = "";return}else{result.innerHTML = calculus}
}

function clearDic(){
  factors.currentNum = ""
  factors.previousNum = ""
  factors.receivedOperator = ""
}

function updateInput(numToUpdate){
    input.innerHTML = numToUpdate;
}

function receiveNumberInputed(num){
  event.preventDefault();
  factors.currentNum += num;
  updateInput(factors.currentNum);
  showCalculus();
}