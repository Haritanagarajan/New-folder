interface savings1_account {
    account_type: string;
    account_num: number;

    balance1(account_type: string,account_num: number ): any;
}
interface current1_account {
    account_type: string;
    account_num: number;

    balance1(account_type: string, account_num: number): any;
}

class ACCOUNT implements savings1_account, current1_account {
    account_type: string
    account_num: number
    constructor(account_type: string,
        account_num: number) {
        this.account_type = account_type
        this.account_num = account_num

    }
    balance1(account_type: string, account_num: number) {
        console.log("Type of account is " + this.account_type)
        console.log("Account number is " + this.account_num)
        


    }
}
let s: savings1_account = new ACCOUNT("savings account", 1652746178461894)
s.balance1("savings account", 1652746178461894)
let c: current1_account = new ACCOUNT("currentaccount", 1234386903866663)
c.balance1("current account", 1234386903866663)
