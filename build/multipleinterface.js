"use strict";
class account {
    constructor(acc_num, acc_type) {
        this.acc_num = acc_num;
        this.acc_type = acc_type;
    }
    balance(acc_num, acc_type) {
        console.log(`account number is ${acc_num} and account type is ${acc_type}`);
    }
}
let I1 = new account(100000, 'savings');
I1.balance(10000, 'savings');
//   let i2:current_account=new account(20000,'current');
//   i2.balance(20000,'current');
