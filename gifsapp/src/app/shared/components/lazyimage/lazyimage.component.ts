import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  standalone: false,
  templateUrl: './lazyimage.component.html',
})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url || !this.alt) {
      throw new Error('Url and alt are required');
    }
  }

  onLoad(): void {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
