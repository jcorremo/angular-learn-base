import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: string) {
    this.countriesService.searchByRegion(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
