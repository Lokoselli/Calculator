//Functions
function createEventListenerFromOperationClass(element, operation){
    function operationListener(operation){
        console.log(factors)
        if(factors.currentNum == "" || factors.operation != ""){
           return;
        }
      
        factors.operation = new operation(factors.currentNum)
        
        updateResult();
        factors.currentNum = "";
        updateInput();
    }

    element.addEventListener("click", function(){
        operationListener(operation);
    })
}


//Operations Listeners
var classes = [Percentage, SquareRoot, Squared, Division, Sum, Subtraction, Multiplication, Inversion]

for(var i = 0; i < classes.length; i ++){
    createEventListenerFromOperationClass(classes[i].element,classes[i]);
}

document.getElementById("equals").addEventListener("click", function(){
    operation = factors.operation;
    factors.lastAnswer = operation.calculate(factors.currentNum);
    updateResult();
    clearFactors();
    updateInput();
})


//Commands Listeners
document.getElementById("clear").addEventListener("click",clearActual);
function clearActual(){
  factors.currentNum    = ""
  updateInput();
}

document.getElementById("delete").addEventListener("click", deleteChar);
function deleteChar(){
  factors.currentNum = factors.currentNum.slice(0,-1)
  updateInput();
}

document.getElementById("clear-everything").addEventListener("click", clearEverything);
function clearEverything(){
  clearFactors();
  updateInput();
  updateResult();
}

document.getElementById("answer").addEventListener("click", function(){
    factors.currentNum = factors.lastAnswer;
    updateInput();
    updateResult();
})



//Numbers Listeners

for(var i = 0; i < 10; i++){
    var element = document.getElementById(i.toString());
    listenerNumberButton(element, i.toString());
}

function listenerNumberButton(el,num){
    function receiveNumberInputed(num){
        factors.currentNum += num;
         updateInput();
        updateResult();
    }
    el.addEventListener("click",function(){
        receiveNumberInputed(num);
    });
}





