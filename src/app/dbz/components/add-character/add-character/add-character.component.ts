import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Esta es la instancia de un emisor de eventos:
  @Output()
public onNewCharacter:EventEmitter<Character> = new EventEmitter();


public character:Character={
  name:"aaaa",
  power:100
}

emitCharacter():void{

  //debugger; //Esto si quiero debager

  if (this.character.name == "") return;

  this.onNewCharacter.emit(this.character);

  this.character={name:"" , power:0}
}

}
