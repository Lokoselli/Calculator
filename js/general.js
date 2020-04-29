var input = document.getElementById('line2')
var result       = document.getElementById('result')
var factors = {
  num1 : "",
  num2 : "",
  receivedOperator : "",
  usingAnswer: false
}


function showCalculus(value){
  var calculus;   
  switch(value){
    case '√': calculus = value + " " + factors.num1;break;
    case '%': calculus = factors.num2.length > 0 ? factors.num2 + " " + value + " " + factors.num1 : factors.num1 + " " + value;break
    case '²': calculus = factors.num1 + value;console.log(factors.num1); break
    default : calculus = factors.num2.length > 0? factors.num2 + " " + factors.receivedOperator + " " + factors.num1: factors.num1 + " " + factors.receivedOperator; break
  }
  if(factors.num1 == "" && factors.num2 == ""){clearDic();result.innerHTML = "";return}else{result.innerHTML = calculus}
}

function clearDic(){
  factors.num1 = ""
  factors.num2 = ""
  factors.receivedOperator = ""
}

function numbers(num){
  event.preventDefault()
  if (Number.isNaN(Number(num))) {return}
  if(factors.usingAnswer == true){return}
  factors.num1 += num
  input.innerHTML = factors.num1
  showCalculus()
}