import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {

  public characters: Character[] = [{ id: uuid(), name: 'Goku', power: 10000 }, { id: uuid(), name: 'Vegeta', power: 9000 }, { id: uuid(), name: 'Krillin', power: 1000 }];

  addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
