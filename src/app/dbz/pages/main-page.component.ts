import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{ id: 1, name: 'Goku', power: 10000 }, { id: 2, name: 'Vegeta', power: 9000 }, { id: 3, name: 'Krillin', power: 1000 }];

  onNewCharacter(character: Character): void {
    character.id = this.characters.length + 1;
    this.characters.push(character);
  }

  onDeleteCharacter(id: number): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}


