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
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      chr: 0
    }

    calculateMod(value: number, mod: string) {
      let calc = Math.floor((value/2) - 5);
      this.attribMods[mod] = calc;
      return calc;
    }

  constructor() {
    this.attribMods = {
      str: this.calculateMod(this.attributes.str, 'str'),
      dex: this.calculateMod(this.attributes.dex, 'dex'),
      con: this.calculateMod(this.attributes.con, 'con'),
      int: this.calculateMod(this.attributes.int, 'int'),
      wis: this.calculateMod(this.attributes.wis, 'wis'),
      chr: this.calculateMod(this.attributes.chr, 'chr')
    }
   }

  ngOnInit(): void {

  }

}
