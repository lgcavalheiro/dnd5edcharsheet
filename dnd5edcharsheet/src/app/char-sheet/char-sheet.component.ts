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
    inspiration: 0,
    proficiencyBonus: 0,
    savingThrows: {},
    skills: {},
    passiveWisdom: 0,
    armorClass: 0,
    initiative: 0,
    speed: 0,
    hitPoints: {},
    hitDice: '',
    deathSaves: {},
    personality: '',
    ideals: '',
    bonds: '',
    flaws: '',
    attacks: {},
    proficiencies: {},
    equipment: {},
    features: {}
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

  receiveCharData($event: any) {
    this.characterSheet[$event.key] = $event.value;
  }

  printSheet(){
    console.log(this.characterSheet);
  }

}
