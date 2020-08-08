class Operation{
    
    constructor(n){
        this.n = parseInt(n);
    }
    
    equals(){
        return this.n + this.symbol + this.n2 + " = " + factors.lastAnswer;
    }

    normalPrint(){
        return this.n + this.symbol;
    }  
}

class Sum extends Operation{
    static element = document.getElementById("sum");
    

    calculate(n){
        this.n2 = parseInt(n);
        return this.n + this.n2;
    }

    toString(){
        this.symbol = " + "
        if(this.n2 != null){
            return this.equals();
        }else{
            return this.normalPrint();
        }
    }
}

class Subtraction extends Operation{
    static element = document.getElementById("subtraction");
    calculate(n){
        this.n2 = parseInt(n);
        return this.n - this.n2;
    }

    toString(){
        this.symbol = " - "
        if(this.n2 != null){
            return this.equals();
        }else{
            return this.normalPrint();
        }
    }
}

class Multiplication extends Operation{
    static element = document.getElementById("multiplication");
    calculate(n){
        this.n2 = parseInt(n);
        return this.n * this.n2;
    }

    toString(){
        this.symbol = " × "
        if(this.n2 != null){
            return this.equals();
        }else{
            return this.normalPrint();
        }
    }
}

class Division extends Operation{
    static element = document.getElementById("division");
    calculate(n){
        this.n2 = parseInt(n);
        return this.n / this.n2;
    }

    toString(){
        this.symbol = " ÷ "
        if(this.n2 != null){
            return this.equals();
        }else{
            return this.normalPrint();
        }
    }
}

class SquareRoot extends Operation{
    static element = document.getElementById("sqrt");
    calculate(){
        return Math.sqrt(this.n);
    }

    toString(){
        return "√" + this.n + " = " + this.answer;
    }
}

class Squared extends Operation{
    static element = document.getElementById("sqrd");
    calculate(){
        return this.n * this.n;
    }

    toString(){
        return this.n + "²" + " = " + this.answer;
    }
}

class Percentage extends Operation{
    static element = document.getElementById("percentage");
    calculate(n2){
        this.n2 = parseInt(n2);
        return this.n2 * (this.n / 100);
    }

    toString(){
        this.symbol = " percent of ";
        if(this.n2 != null){
            return this.equals();
        }else{
            return this.n.toString();
        }
        
    }
}

class Inversion extends Operation{
    static element = document.getElementById("inversion");
    calculate(){
        return this.inversion();
    }
}


