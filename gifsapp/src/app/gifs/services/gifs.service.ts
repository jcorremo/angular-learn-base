import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, provideHttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '966oCgB7X47pFQuNQ2fTltoTFM1CTcJ4';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private tagsHistory: string[] = [];
  private gifsList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get gifs(): Gif[] {
    return [...this.gifsList];
  }

  get history(): string[] {
    return [...this.tagsHistory];
  }

  public async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.orderByHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response: SearchResponse) => {
        this.gifsList = response.data;
      });
  }

  /** USING FETCH
  public async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.orderByHistory(tag);

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  */
  private orderByHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this.tagsHistory = this.tagsHistory.filter(t => t !== tag);
    }
    this.tagsHistory.unshift(tag);
    this.tagsHistory.splice(10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }

  private loadLocalStorage(): void {
    this.tagsHistory = JSON.parse(localStorage.getItem('history')!) || [];
    if (this.tagsHistory.length === 0) return;
    const firstTtag = this.tagsHistory[0];
    this.searchTag(firstTtag);
  }

}
