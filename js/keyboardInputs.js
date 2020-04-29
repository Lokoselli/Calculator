document.onkeypress = function(e) {
   e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    inputed = charCode ==13?charCode.toString():String.fromCharCode(charCode)
    console.log(inputed)
	switch(inputed){
		case '+': operations('+');break;
	    case '-': operations('-');break;
	    case '*': operations('×');break;
	    case '/': operations('÷');break;
	    case '13': operations('=');break;
	    default	: numbers(inputed);
}
};
