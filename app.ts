import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from "./class/PeopleAccount"
import { SavingAccount } from './class/SavingsAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(7, 'Mateus', 198)
const companyAccount: CompanyAccount = new CompanyAccount('Dio', 200)
const savingAccount: SavingAccount = new SavingAccount('Conta-Poupança-Mateus', 300)

const namePeople = peopleAccount.getName()
const nameCompany = companyAccount.getName()
const nameSavingAccount = savingAccount.getName()

console.log(namePeople, 'has', peopleAccount.getBalance())
console.log(nameCompany, 'has',companyAccount.getBalance())
console.log(nameSavingAccount, 'has',savingAccount.getBalance())

peopleAccount.deposit(50)
peopleAccount.withDraw(10)
console.log(`${namePeople} has`, peopleAccount.getBalance())

companyAccount.deposit(500)
companyAccount.getLoan(500)
companyAccount.withDraw(100)
console.log(`${nameCompany} has`, companyAccount.getBalance())

savingAccount.deposit(100)
savingAccount.withDraw(20)
console.log(`${nameSavingAccount} has`, savingAccount.getBalance())