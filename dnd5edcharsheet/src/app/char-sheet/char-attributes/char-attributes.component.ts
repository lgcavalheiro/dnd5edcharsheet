import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-char-attributes',
  templateUrl: './char-attributes.component.html',
  styleUrls: ['./char-attributes.component.scss']
})
export class CharAttributesComponent implements OnInit {

  attributes = {
    str: 10,
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

    @Output() attributeEvent = new EventEmitter<object>();
    @Output() modEvent = new EventEmitter<object>();
    @Output() charDataEvent = new EventEmitter<object>();

    calculateMod(value: number, mod: string) {
      let calc = Math.floor((value/2) - 5);
      this.attribMods[mod] = calc;
      this.sendAttributes();
      return calc;
    }

  constructor() {

   }

  ngOnInit(): void {
    this.attribMods = {
      str: this.calculateMod(this.attributes.str, 'str'),
      dex: this.calculateMod(this.attributes.dex, 'dex'),
      con: this.calculateMod(this.attributes.con, 'con'),
      int: this.calculateMod(this.attributes.int, 'int'),
      wis: this.calculateMod(this.attributes.wis, 'wis'),
      chr: this.calculateMod(this.attributes.chr, 'chr')
    }
  }

  sendAttributes() {
    this.attributeEvent.emit(this.attributes);
    this.modEvent.emit(this.attribMods);
  }

  randomizeAttribute(attrib: string){
    let numbers = [1, 1, 1, 1];
    for (let i in numbers) {
      numbers[i] = Math.floor(Math.random() * 6)+1;
    };
    numbers.sort().shift();
    this.attributes[attrib] = numbers.reduce((cur, nex) => { return cur + nex });
  }

  randomizeAll(){
    let attrs = ['str', 'dex', 'con', 'int', 'wis', 'chr'];
    for(let attrib of attrs) {
      this.randomizeAttribute(attrib);
    }
  }

}
