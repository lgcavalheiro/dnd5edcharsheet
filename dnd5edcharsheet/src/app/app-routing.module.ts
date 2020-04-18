import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharSheetComponent } from './char-sheet/char-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: CharSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
