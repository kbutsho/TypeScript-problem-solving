class BankAccount {
    public accountNumber: number;
    public balance: number
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    deposit(amount: number): object {
        this.balance = this.balance + amount
        return {
            account_number: `account number ${this.accountNumber}`,
            previous_balance: `previous balance ${this.balance - amount}`,
            deposit: `deposit amount ${amount}`,
            total: `total balance ${this.balance}`
        }
    }
    withdraw(amount: number): object {
        if (this.balance < amount) {
            return {
                previous_balance: `available balance ${this.balance}`,
                withdraw: `withdraw request amount ${amount}`,
                error: `insufficient balance`
            }
        } else {
            this.balance = this.balance - amount
            return {
                previous_balance: `previous balance ${this.balance + amount}`,
                withdraw: `withdraw amount ${amount}`,
                remaining: `remaining balance ${this.balance}`
            }
        }

    }
}

class SavingsAccount extends BankAccount {
    public interestRate: number
    constructor(accountNumber: number, balance: number, interestRate: number) {
        super(accountNumber, balance)
        this.interestRate = interestRate
    }
    applyInterest(): object {
        const interest: number = (this.interestRate / 100) * this.balance
        this.balance = this.balance + interest
        return {
            account_number: `account number ${this.accountNumber}`,
            previous_balance: `previous balance ${this.balance - interest}`,
            interest_rate: `interest rate ${this.interestRate}`,
            interest: `total interest ${interest}`,
            total: `total amount ${this.balance}`
        }
    }

}

const account1 = new BankAccount(1, 1)
const account2 = new BankAccount(2, 1)

const savings1 = new SavingsAccount(3, 100, 10)
const savings2 = new SavingsAccount(4, 100, 10)

console.log(account1.deposit(1))
console.log(account1.deposit(1))
console.log(account1.withdraw(3))

console.log(savings1.applyInterest())