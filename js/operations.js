class Operation{
    
    constructor(n){
        this.n = parseInt(n);
    }

    
    sum(n){
        return (this.n + n);
    }


    subtraction(n){
        return (this.n - n);
    }

    multiplication(n){
        return (this.n * n);
    }

    division(n){
        return (this.n / n);
    }

    squareRoot(){
        return (Math.sqrt(this.n));
    }

    squared(){
        return (this.n * this.n);
    }

    percentage(percent){
        return (this.n * (percent / 100));
    }

    inversion(){
        return (this.n * -1);
    }

    equals(){
        operations(factors.receivedOperator);
        showCalculus(operator);              
        clearDic();
        factors.usingAnswer = false;
    }
   
}

class Sum extends Operation{
    calculate(n){
        this.n2 = parseInt(n);
        return this.sum(n);
    }

    toString(){
        if(this.n2 != null){
            return this.n + " + " + this.n2;
        }else{
            return this.n + " + ";
        }
    }
}

class Subtraction extends Operation{
    calculate(n){
        this.n2 = parseInt(n);
        return this.subtraction(n);
    }

    toString(){
        if(this.n2 != null){
            return this.n + " - " + this.n2;
        }else{
            return this.n + " - ";
        }
    }
}

class Multiplication extends Operation{
    calculate(n){
        this.n2 = parseInt(n);
        return this.multiplication(n);
    }

    toString(){
        if(this.n2 != null){
            return this.n + " × " + this.n2;
        }else{
            return this.n + " × ";
        }
    }
}

class Division extends Operation{
    calculate(n){
        this.n2 = parseInt(n);
        return this.division(n);
    }

    toString(){
        if(this.n2 != null){
            return this.n + " ÷ " + this.n2;
        }else{
            return this.n + " ÷ ";
        }
    }
}

class SquareRoot extends Operation{
    calculate(){
        return this.squareRoot();
    }

    toString(){
        return "√" + this.n;
    }
}

class Squared extends Operation{
    calculate(){
        return this.squared();
    }

    toString(){
        return this.n + "²";
    }
}

class Percentage extends Operation{
    calculate(percent){
        this.percent = parseInt(percent);
        return this.percentage(percent);
    }

    toString(){
        if(this.percent != null){
            return this.percent + " percent of " + this.n;
        }else{
            return this.n.toString();
        }
        
    }
}

class Inversion extends Operation{
    calculate(){
        return this.inversion();
    }
}


