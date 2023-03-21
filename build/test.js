"use strict";
class customer {
    constructor(CustomerName, Age, Address, ContactNumber) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
    AccessDetails() {
        console.log(`CUSTOMER NAME IS :${this.CustomerName} \n AGE IS: ${this.Age} \n ADDRESS IS: ${this.Address} \n CONTACT NUMBER IS:${this.ContactNumber}`);
    }
}
class loan extends customer {
    constructor(customerName, Age, Address, ContactNumber, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        super(customerName, Age, Address, ContactNumber);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.InterestRate = InterestRate;
    }
    AccessDetails() {
        super.AccessDetails();
        console.log(`LOAN ACCOUNT NUM   IS :${this.LoanAccountNo} \n LOAN TYPE IS: ${this.LoanType} \n LOAN AMOUNT  IS: ${this.LoanAmount} \n DURATION IS:${this.Duration} \n INTEREST RATE IS ${this.InterestRate} \n`);
    }
    interest_calculate() {
        var calculate = this.InterestRate * this.LoanAmount;
        console.log("Amount to be paid by the customer on the due date is:" + calculate);
    }
    display() {
        console.log(`CUSTOMER NAME IS :${this.CustomerName} \n AGE IS: ${this.Age} \n ADDRESS IS: ${this.Address} \n CONTACT NUMBER IS:${this.ContactNumber}`);
        console.log(`LOAN ACCOUNT NUM   IS :${this.LoanAccountNo} \n LOAN TYPE IS: ${this.LoanType} \n LOAN AMOUNT  IS: ${this.LoanAmount} \n DURATION IS:${this.Duration} \n INTEREST RATE IS ${this.InterestRate}`);
    }
}
var obj = new loan("HARITA", 21, "KOVAIPUDUR", "6382830515", 1234567890, "EDUCATIONAL LOAN", 100000, "5 YEARS", 150);
console.log("ACCESS DETAILS \n");
console.log("********************************");
obj.AccessDetails();
console.log("DISPLAY DETAIILS \n");
console.log("********************************");
obj.display();
console.log("INTEREST CALCULATION");
console.log("********************************");
obj.interest_calculate();
