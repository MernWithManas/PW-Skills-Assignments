class bankAccount {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }

    checkBalance() {
        console.log(`Account balance for ${this.name} : Rs.${this.balance}`);
    }

    deposit(credited) {
        if (credited > 0) {
            this.balance += credited;
            console.log(`Deposited Rs.${credited}. New Balance: Rs.${this.balance}`);
        } else {
            console.log(`Invalid deposit amount. Please enter a positive amount.`);
        }
    }
    withdraw(debited) {
        if (this.balance > debited && debited > 0) {
            this.balance -= debited;
            console.log(`Withdrawn Rs.${debited}. New Balance: Rs.${this.balance}`);
        } else if (this.balance < debited) {
            console.log(`Insufficient funds for withdrawal.`);
        } else if (debited < 0) {
            console.log(`Invalid withdrawl amount. Please enter a positive amount.`);
        }
    }
}

const myAccount = new bankAccount("Manas K", 1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance();