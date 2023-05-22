import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string;
  public age:number;

  constructor(){
    this.name = "ironMan";
    this.age=45;
  }

  //Este es un GET, pero lo ve como una propiedad mas
  get CapitalizeName():string{
    return this.name.toUpperCase();
  }

  //este es un metodo...desde el html lo llamo con ()
  getHeroDescription():string{
    return this.name + ' - ' + this.age
  }

  changeName():void{
    this.name = "SpiderMan";
  }

  changeAge():void{
    this.age = 25;
  }

  ResetForm():void{
    this.name = "ironMan";
    this.age = 45;
  }
}
