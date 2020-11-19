import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import { AboutComponent } from './components/about/about.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AdminComponent,
    AboutComponent
  ],
  imports: [AdminRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  providers: []
})
export class AdminModule {
}
