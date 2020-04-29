
function operations(operator){
  switch(operator){
    case '+': if(factors.num2.length > 0){factors.result = (Number(factors.num2) + Number(factors.num1)).toString();input.innerHTML = factors.result; break;}else{
              factors.num2             = factors.num1
              input.innerHTML          = "";
              factors.num1             = ""
              factors.receivedOperator = operator;
              break;}
    case '-': if(factors.num2.length > 0){factors.result = (Number(factors.num2) - Number(factors.num1)).toString();input.innerHTML = factors.result; break;}else{
              input.innerHTML          = "";
              factors.num2             = factors.num1
              factors.num1             = ""
              factors.receivedOperator = operator;
              break;};
    case '×': if(factors.num2.length > 0){factors.result = (Number(factors.num2) * Number(factors.num1)).toString(); input.innerHTML = factors.result; break;}else{
              input.innerHTML          = "";
              factors.num2             = factors.num1
              factors.num1             = ""
              factors.receivedOperator = operator;
              break;};
    case '÷': if(factors.num2.length > 0){factors.result = (Number(factors.num2) / Number(factors.num1)).toString();input.innerHTML = factors.result; break;}else{
              input.innerHTML          = "";
              factors.num2             = factors.num1
              factors.num1             = ""
              factors.receivedOperator = operator;
              break;};
    case '√': if(factors.num1.length == 0){return}else{factors.result = (Math.sqrt(factors.num1)).toString(); input.innerHTML = factors.result ;
              showCalculus(operator);clearDic();return;
              ;}
    case '²': if(factors.num1.length == 0){return}else{factors.result = (Number(factors.num1) * Number(factors.num1)).toString();input.innerHTML = factors.result ;
              showCalculus(operator);clearDic();return;
              }
    case '%': if(factors.num2.length > 0){factors.result = Number(factors.num1) * (Number(factors.num2)/100); input.innerHTML = factors.result; break;}else{
              input.innerHTML          = "";
              factors.num2             = factors.num1
              factors.num1             = ""
              factors.receivedOperator = operator;
              break;};
    case '±': if(factors.num1.length == 0){return}else{factors.num1 = (factors.num1 * -1).toString(); 
              input.innerHTML = factors.num1;
              break }       
    case '=': operations(factors.receivedOperator);
              showCalculus(operator)              
              clearDic()
              factors.usingAnswer = false
              return
  }
  showCalculus(operator)
  factors.usingAnswer = false
}
