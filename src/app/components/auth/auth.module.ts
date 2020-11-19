import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {AuthRoutingModule} from './auth-routing.module';
import { AddComponent } from './components/add/add.component';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AuthComponent,
    AboutComponent,
    HomeComponent,
    AddComponent],
  imports: [
    AuthRoutingModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule],
  exports: [QuillModule],
  providers: []
})
export class AuthModule {
}
