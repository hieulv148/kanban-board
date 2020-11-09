import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatDialogModule
  ]
})
export class CustomMaterialModule {
}
