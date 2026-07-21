const addBtn = document.querySelector('button')
const textInt = document.querySelector('.text')
const output = document.querySelector('.output')
const arr = []


function addElement(task) {
  arr.push(task);
  console.log(arr); 
} 


addBtn.addEventListener('click', (e) => {
   
arr.map((e) => (output.innerHTML += `<p>${e}</p>`))
   addElement(textInt.value)
   textInt.value = ""
})

const account = createBankAccount(
    "Nikunj",
    "9876543210",
    "nikunj@gmail.com",
    5000
);

console.log(account.accountHolder);
console.log(account.mobile);
console.log(account.email);

account.checkBalance();

account.deposit(2500);
account.checkBalance();

account.withdraw(1500);
account.checkBalance();

account.withdraw(10000);


function createBankAccount(AccountHolder , Mobile , Email , Balance =0 ){
    let balance = Number(Balance);
    function deposit(amount){
        if(amount>0){
            balance+=amount;
            return `Balance is ${balance}`;
        }
        return "Invaild deposit amount";
    }
    function withdraw(amount){
        if(amount>0 && amount<=balance){
            balance-=amount;
            return `Balance is ${balance}`;
        }
        return "Insufficient balance";
    }
    function checkBalance(){
        return `Current Balance is ${balance}`;
    }
    return {
        AccountHolder,
        Mobile,
        Email,
        deposit,
        withdraw,
        checkBalance,
    };
}

const account  = createBankAccount(
    "tajgn",
    "9638527411",
    "qwerty@gmail.com",
    10000,
)

console.log(account.checkBalance());
console.log(account.deposit(-5000));
console.log(account.withdraw(8500));
console.log(account.checkBalance());


//  13. Secure Bank Account (Factory Function + Closures)
// ∙ Create a Factory Function named createBankAccount().
// ∙ Properties:
// ∙ Account Holder
// ∙ Mobile
// ∙ Email
// ∙ Balance should remain private using closures.
// ∙ Methods:
// ∙ I
// ∙ deposit(amount)
// ∙ withdraw (amount)
// ∙ checkBalance()


class Bank{
    
}