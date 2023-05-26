import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';  //corri:  npm i uuid y despues  npm i --save-dev @types/uuid

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[]=[{
    id:uuid(),    //me genera un string con un ID unico (porque uso la lib q importe arriba)
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Drucu',
    power:6000
  }];

  onNewCharacter(character:Character):void{
    character.id = uuid();
    this.characters.push(character);
  }

  onDeleteCharacter(indice:number):void{
    this.characters.splice(indice,1);
    console.log(indice);
  }

  onDeleteById(Id:string):void{
    this.characters = this.characters.filter(character => character.id != Id);

  }
}
