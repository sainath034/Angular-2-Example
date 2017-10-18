import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'List', component: ListComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Edit', component: EditComponent },
  { path: 'PageNotFound', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [ListComponent,CreateComponent,AppComponent,EditComponent,PageNotFoundComponent],
  imports: [BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
