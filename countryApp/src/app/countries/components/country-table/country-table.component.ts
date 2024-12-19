import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  standalone: false,
  styleUrl: './country-table.component.css',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
