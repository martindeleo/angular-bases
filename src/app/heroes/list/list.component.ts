import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['spiderman','ironman','hulk','she hulk','thor']
  public heroBorrado:string | undefined = "";

  removeHero():void{
    this.heroBorrado = this.heroNames.pop();

  }

}
