import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('searchInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  // searchTag(tag: string): void {
  // (keyup.enter)="searchTag(searchInput.value)" in Template HTML
  searchTag(): void {
    const tag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(tag);
    this.tagInput.nativeElement.value = '';
  }

}
