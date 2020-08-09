//Functions
function createEventListenerFromOperationClass(element, operation){
    element.addEventListener("click", function(){
        operationEvent(operation);
    })
}

function operationEvent(operation){
    if(factors.currentNum == "" || factors.operation != ""){
       return;
    }
  
    factors.operation = new operation(factors.currentNum)
    
    if(classesWithSingleNumberNeeded.includes(operation)){
        equals();
    }else{
        updateResult();
        factors.currentNum = "";
        updateInput();
    }
}

//Keyboard Listener
document.onkeypress = function(e) {
   e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    inputed = charCode ==13?charCode.toString():String.fromCharCode(charCode)
    switch(inputed){
        case "*": operationEvent(Multiplication); break;
        case "/": operationEvent(Division); break;
        case "+": operationEvent(Sum); break;
        case "-": operationEvent(Subtraction); break;
        case "13": equals(); break;
        default: receiveNumberInputed(inputed);
    }
};


//Operations Listeners
var classes = [Percentage, SquareRoot, Squared, Division, Sum, Subtraction, Multiplication]
var classesWithSingleNumberNeeded = [Squared, SquareRoot]

for(var i = 0; i < classes.length; i ++){
    createEventListenerFromOperationClass(classes[i].element,classes[i]);
}

document.getElementById("equals").addEventListener("click", equals);
function equals(){
    operation = factors.operation;
    if(operation == ""){
        return;
    }
    factors.lastAnswer = operation.calculate(factors.currentNum).toString();
    updateResult();
    clearFactors();
    updateInput();
}

document.getElementById("inversion").addEventListener("click", function(){
    factors.currentNum *= -1;
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
    el.addEventListener("click",function(){
        receiveNumberInputed(num);
    });
}
function receiveNumberInputed(num){
    if(isNaN(num)){
        return;
    }
    factors.currentNum += num;
     updateInput();
    updateResult();
}




