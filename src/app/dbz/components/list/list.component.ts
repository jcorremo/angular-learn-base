import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  public deleteCharacter(index: number): void {
    this.onDeleteCharacter.emit(index);
  }

}
