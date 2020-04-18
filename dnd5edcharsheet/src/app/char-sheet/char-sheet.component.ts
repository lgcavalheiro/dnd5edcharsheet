import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.scss']
})
export class CharSheetComponent implements OnInit {

  attributes = {
    str: 7,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    chr: 10
  }

  attribMods = {
      str: this.calculateMod(this.attributes.str),
      dex: this.calculateMod(this.attributes.dex),
      con: this.calculateMod(this.attributes.con),
      int: this.calculateMod(this.attributes.int),
      wis: this.calculateMod(this.attributes.wis),
      chr: this.calculateMod(this.attributes.chr)
    }

    calculateMod(value: number) {
      return Math.floor((value/2) - 5);
    }

  constructor() {

   }

  ngOnInit(): void {

  }

}
