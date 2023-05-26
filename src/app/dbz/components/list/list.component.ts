import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Esta es la instancia de un emisor de eventos:
  @Output()
public onDeleteID:EventEmitter<number> = new EventEmitter();

  //Esta es la instancia de un emisor de eventos:
@Output()
public onDeleteById:EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList:Character[]=[{
    name:'trunk',
    power:50
  },{
    name:'juan',
    power:200
  }];

  public DeleteCharacter(index:number):void{
    this.onDeleteID.emit(index);
  }

  public DeleteCharacterbyID(ID?:string):void{
    this.onDeleteById.emit(ID);
  }
}
