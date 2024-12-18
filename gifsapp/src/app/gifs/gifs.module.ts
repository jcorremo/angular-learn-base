import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    CardListComponent,
    CardItemComponent,
    HomePageComponent,
    SearchBoxComponent
  ],
  exports: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
