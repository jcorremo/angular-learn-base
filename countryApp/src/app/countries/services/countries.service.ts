import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { SearchType } from '../interfaces/search-type.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  public searchByCapital(capital: string): Observable<Country[]> {
    return this.searchBy(capital, SearchType.Capital);
  }

  public searchByCountry(capital: string): Observable<Country[]> {
    return this.searchBy(capital, SearchType.Country);
  }

  public searchByRegion(capital: string): Observable<Country[]> {
    return this.searchBy(capital, SearchType.Region);
  }

  public searchByCode(capital: string): Observable<Country | null> {
    return this.searchBy(capital, SearchType.Code)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null)
      );
  }

  private searchBy(term: string, searchType: SearchType): Observable<Country[]> {
    const searchUrl = `${this.apiUrl}/${searchType}/${term}`;
    return this.httpClient.get<Country[]>(searchUrl)
      .pipe(
        catchError(() => of([]))
      );
  }



}
