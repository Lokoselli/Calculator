var input = document.getElementById('line2')
var result       = document.getElementById('result')
var factors = {
  currentNum : "",
  operation: "",
}


function clearFactors(){
  factors.currentNum = ""
  factors.operation = ""
}

function updateInput(){
  input.innerHTML = factors.currentNum;
}

function updateResult(){
  if(factors.operation != ""){
    result.innerHTML = factors.operation.toString();
  }else{
    result.innerHTML = "";
  }
}

function updateResult(resultNum){
  result.innerHTML = factors.operation.toString(); 
}

