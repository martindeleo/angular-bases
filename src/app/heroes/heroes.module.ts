import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule  // Cuando creo un modulo que usa los ngIF o ngFor, etc...en mis modulos tengo q importar esto. En el app.Module.ts no hace falta
  ]
})
export class heroesModule{

}
