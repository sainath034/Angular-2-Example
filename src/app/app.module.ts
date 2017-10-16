import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'List', component: ListComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Edit', component: EditComponent },
];

@NgModule({
  declarations: [ListComponent,CreateComponent,AppComponent,EditComponent],
  imports: [BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
