interface savings_account {
    balance1(): any;

}
interface current_account{
    balance2(): any;
}
class account implements savings_account, current_account {
 balance1() {
     console.log("account type is savings ");
}
balance2() {
    console.log("account type is current ");
}
}
 let I1: savings_account= new account();
  I1.balance1();
 let I2: current_account= new account();
 I2.balance2();





