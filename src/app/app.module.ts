import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import { CustomMaterialModule } from './custom-material/custom-material.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    DragDropModule,
    FormsModule,
    CustomMaterialModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
