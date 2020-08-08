//Functions
function createEventListenerFromOperationClass(id, operation){
    function operationListener(operation){
        if(factors.operation == ""){
            factors.operation = new operation(factors.currentNum)
        }else{
            factors.currentNum = factors.operation.calculate(factors.currentNum);
            factors.operation = new operation(factors.currentNum);
        }
    }
    document.getElementById(id).addEventListener("click", operationListener(operationListener))
}


//Operations Listeners
createEventListenerFromOperationClass("percentage", Percentage);
createEventListenerFromOperationClass("sqrt", SquareRoot);
createEventListenerFromOperationClass("sqrd", Squared);
createEventListenerFromOperationClass("division", Division);
createEventListenerFromOperationClass("multiplication", Multiplication);
createEventListenerFromOperationClass("subtraction", Subtraction);
createEventListenerFromOperationClass("sum", Sum);
createEventListenerFromOperationClass("inversion", Inversion);
document.getElementById("equals").addEventListener("click", function(){
    operation = factors.operation;
    operation.answer = operation.calculate(currentNum);
})


//Commands Listeners
document.getElementById("clear",clearActual());
document.getElementById("delete", deleteChar());
document.getElementById("clear-everything", clearEverything());

//Numbers Listeners
function listenerNumberButton(id){
    console.log(id)
    document.getElementById(id).addEventListener("click",receiveNumberInputed(id));
}
for(var i; i < 10; i++){
    listenerNumberButton(i.toString());
}
