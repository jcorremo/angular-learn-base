import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyimageComponent } from './components/lazyimage/lazyimage.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LazyimageComponent
  ],
  exports: [
    SidebarComponent,
    LazyimageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
