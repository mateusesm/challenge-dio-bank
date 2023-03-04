import DioAccount from "./DioAccount"

export class SavingAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit(valueDeposited: number): void {
    if (this.validationStatus()) {
      const value: number = valueDeposited + 10
      const nameOfDeposit: string = this.getName()
      console.log(nameOfDeposit, `has deposited ${valueDeposited} earned another 10 dollars`)
      this.setBalanceDeposit(value)
    }
  }
}