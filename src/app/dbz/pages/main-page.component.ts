import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

//constructor(public dbzService:DbzService  ){}  //Aca tengo injectado mi Servicio (aca es publico...no recomentado)



constructor(private dbzService:DbzService  ){}  //Aca tengo injectado mi Servicio (aca es publico...no recomentado)

get characters():Character[]{
  //return this.dbzService.characters;

  return [...this.dbzService.characters];
}

onDeleteById(Id:string):void{
  this.dbzService.onDeleteById(Id)
}

onNewCharacter(character:Character):void{
  this.dbzService.onNewCharacter(character);
}

}
