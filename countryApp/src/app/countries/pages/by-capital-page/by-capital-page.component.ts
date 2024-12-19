import { Component, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string) {
    this.countriesService.searchByCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }

}
