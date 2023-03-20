interface sum{
    mathametics(input1:number,input2:number):void   
}
class student1 implements sum{
    mathametics(input1:number,input2:number){
       console.log("addition of two inputs is:"+(input1+input2))
    }
}
class student2 implements sum{
    mathametics(input1:number,input2:number){
       console.log("subtraction of two inputs is:"+(input1-input2))
    }
}

class student3 implements sum{
    mathametics(input1:number,input2:number){
       console.log("multiplication of two inputs is:"+(input1*input2))
    }
}
class Calculator { //calculator 
    input1: number;
    input2: number;
    condition: sum; 

    constructor(input1: number, input2: number, condition: sum) {
        this.input1 = input1;
        this.input2 = input2;
        this.condition = condition;

        const operateObj = this.condition; 
        operateObj.mathametics(this.input1, this.input2);
    }
}


const calculatorObj = new Calculator(100, 75.0, new student1);
const calculatorObj1 = new Calculator(100, 75.0, new student2);
const calculatorObj2 = new Calculator(2,2 , new student3);  
