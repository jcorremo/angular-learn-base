import { Component, OnInit } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DBZService) { }

  get characters() {
    return this.dbzService.characters;
  }

  onDeleteCharacter(index: string): void {
    this.dbzService.deleteCharacter(index);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}


