import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  styleUrl: './search-box.component.css',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  placeholder: string = 'Search...';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
