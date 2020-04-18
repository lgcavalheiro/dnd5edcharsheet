import { Component, OnInit } from '@angular/core';

import { CharAttributesComponent } from './char-attributes/char-attributes.component';
import { CharHeaderComponent } from './char-header/char-header.component';

@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.scss'],
})
export class CharSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
