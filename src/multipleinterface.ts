interface savings_account {
    acc_num:number
    acc_type:string
    balance(acc_num:number,acc_type:string): any;

}
interface current_account{
    acc_num:number
    acc_type:string
    balance(acc_num:number,acc_type:string): any;
}
class account implements savings_account, current_account {
    acc_num:number
    acc_type:string
    constructor(acc_num:number,acc_type:string){
        this.acc_num=acc_num
        this.acc_type=acc_type
    }
 balance(acc_num:number,acc_type:string) {
     console.log(`account number is ${acc_num} and account type is ${acc_type}`);
}
}
 let I1: savings_account= new account(100000,'savings');
  I1.balance(10000,'savings');
//   let i2:current_account=new account(20000,'current');
//   i2.balance(20000,'current');






