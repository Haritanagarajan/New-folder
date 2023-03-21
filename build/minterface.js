"use strict";
class ACCOUNT {
    constructor(account_type, account_num) {
        this.account_type = account_type;
        this.account_num = account_num;
    }
    balance1(account_type, account_num) {
        console.log("Type of account is " + this.account_type);
        console.log("Account number is " + this.account_num);
    }
}
let s = new ACCOUNT("savings account", 1652746178461894);
s.balance1("savings account", 1652746178461894);
let c = new ACCOUNT("currentaccount", 1234386903866663);
c.balance1("current account", 1234386903866663);
