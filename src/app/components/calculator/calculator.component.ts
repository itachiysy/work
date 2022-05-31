import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public currentNumber: string = '0';
  public curresult: any = null;
  public operator: any = null;
  public ifNumber: boolean = false;

  public getNumber(value: string) {
    if (this.ifNumber) {
      this.currentNumber = value;
      this.ifNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = value : this.currentNumber += value;
    }
    console.log(this.currentNumber, this.curresult, this.operator, this.ifNumber);
  }
  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }
  dele() {
    if (this.currentNumber.length > 1)
      this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
    else this.currentNumber = '0';
  }
  private doCalculation(op: any, result: number) {
    switch (op) {
      case '+':
        return this.curresult += result;
      case '-':
        return this.curresult -= result;
      case '*':
        return this.curresult *= result;
      case '/':
        return this.curresult /= result;
      case '=':
        return result;
    }
  }
  public getOperation(op: string) {
    if (this.curresult === null) {
      this.curresult = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.curresult = result;
    }
    this.operator = op;
    this.ifNumber = true;
    console.log(this.currentNumber, this.curresult, this.operator, this.ifNumber);
  }
  public ac() {
    this.currentNumber = '0';
    this.curresult = null;
    this.operator = null;
    this.ifNumber = false;
  }

}
