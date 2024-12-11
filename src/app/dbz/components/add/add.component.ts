import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: 0,
    name: '',
    power: 0,
  };

  public add(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({ ...this.character });
    this.character = { id: 0, name: '', power: 0 };
  }

}
