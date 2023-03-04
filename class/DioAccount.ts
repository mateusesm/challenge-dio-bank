export default abstract class DioAccount {
  private readonly accountNumber: number
  private readonly name: string
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  protected setBalanceDeposit(value: number): void {
    this.balance += value
    console.log(this.name, 'has added', value) 
  }

  protected setBalanceWithDraw(value: number): void {
      this.balance -= value
      console.log(this.name, 'has withdrew', value)
  }

  getBalance(): number {
    return this.balance
  }

  deposit(valueDeposited: number): void {
    if (this.validationStatus()) {
      this.setBalanceDeposit(valueDeposited)
    }
  }

  withDraw(valueWithDraw: number): void {
    if (this.validationStatus() && this.balance > valueWithDraw) {
      this.setBalanceWithDraw(valueWithDraw)
    }  
  }

  protected validationStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Error! Invalid account!')
  }

}
