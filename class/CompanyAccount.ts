import DioAccount from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan(valueLoan: number): void {
    if (this.validationStatus()) {
      const nameOfLoan: string = this.getName()
      this.setBalanceDeposit(valueLoan)
    } 
  }

}