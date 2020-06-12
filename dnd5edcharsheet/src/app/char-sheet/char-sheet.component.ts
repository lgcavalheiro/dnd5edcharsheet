import { Component, OnInit } from '@angular/core';

import { CharAttributesComponent } from './char-attributes/char-attributes.component';
import { CharHeaderComponent } from './char-header/char-header.component';

@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.scss'],
})
export class CharSheetComponent implements OnInit {

  characterSheet = {
    characterName: '',
    characterClass: '',
    level: 0,
    background: '',
    playerName: '',
    characterRace: '',
    alignment: '',
    experience: 0,
    attributes: {},
    attributeModifiers: {},
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  receiveAttributes($event: object) {
    this.characterSheet.attributes = $event;
  }

  receiveMods($event: object) {
    this.characterSheet.attributeModifiers = $event;
  }

  printSheet(){
    console.log(this.characterSheet);
  }

}
