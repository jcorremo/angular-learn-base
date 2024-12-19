import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { SearchType } from '../interfaces/search-type.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { term: 'africa', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  public searchByCapital(term: string): Observable<Country[]> {
    return this.searchBy(term, SearchType.Capital)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(countries => this.saveToLocalStorage())
      );
  }

  public searchByCountry(term: string): Observable<Country[]> {
    return this.searchBy(term, SearchType.Country)
      .pipe(
        tap(countries => this.cacheStore.byCountry = { term, countries }),
        tap(countries => this.saveToLocalStorage())
      );
  }

  public searchByRegion(term: Region): Observable<Country[]> {
    return this.searchBy(term, SearchType.Region)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { term, countries }),
        tap(countries => this.saveToLocalStorage())
      );
  }

  public searchByCode(term: string): Observable<Country | null> {
    return this.searchBy(term, SearchType.Code)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null)
      );
  }

  private searchBy(term: string, searchType: SearchType): Observable<Country[]> {
    const searchUrl = `${this.apiUrl}/${searchType}/${term}`;
    return this.httpClient.get<Country[]>(searchUrl)
      .pipe(
        catchError(() => of([])),
        //delay(2000)
      );
  }

  private loadFromLocalStorage(): void {
    const cacheStore = localStorage.getItem('cacheStore');
    if (cacheStore) {
      this.cacheStore = JSON.parse(cacheStore);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
}
