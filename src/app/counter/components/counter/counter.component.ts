import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template:`
  <h3>contador : {{counter}}</h3>

<button (click)="Increase(1)">+1</button>
<button (click)="reset()" >Reset</button>
<button (click)="Increase(-1)">-1</button>


  `,
})
export class CounterComponent{
  public counter:number=10;

  public Increase(valor:number ):void {
    this.counter += valor;
  }

  reset():void{
    this.counter =10;
  }

}
