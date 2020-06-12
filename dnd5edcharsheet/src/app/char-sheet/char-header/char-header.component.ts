import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-char-header',
  templateUrl: './char-header.component.html',
  styleUrls: ['./char-header.component.scss']
})
export class CharHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() charNameEvent = new EventEmitter<string>();

  sendCharName(value: string) {
    setTimeout(() => {
      if(this.characterName === value) {
        this.charNameEvent.emit(this.characterName);
      }
    }, 1000);

  }

  characterName = '';

  playerName = '';

  experience = 0;

  classes = [
    { name: 'Barbarian' },
    { name: 'Bard' },
    { name: 'Cleric' },
    { name: 'Druid' },
    { name: 'Fighter' },
    { name: 'Monk' },
    { name: 'Paladin' },
    { name: 'Ranger' },
    { name: 'Rogue' },
    { name: 'Sorcerer' },
    { name: 'Warlock' },
    { name: 'Wizard' },
  ];

  backgrounds = [
    { name: 'Acolyte' },
    { name: 'Charlatan' },
    { name: 'Criminal/Spy' },
    { name: 'Entertainer' },
    { name: 'Folk Hero' },
    { name: 'Gladiator' },
    { name: 'Guild Artisan/Guild Merchant' },
    { name: 'Hermit' },
    { name: 'Knight' },
    { name: 'Noble' },
    { name: 'Outlander' },
    { name: 'Pirate' },
    { name: 'Sage' },
    { name: 'Sailor' },
    { name: 'Soldier' },
    { name: 'Urchin' },
  ];

  races = [
    { name: 'Dragonborn' },
    { name: 'Dwarf' },
    { name: 'Elf' },
    { name: 'Gnome' },
    { name: 'Half-Elf' },
    { name: 'Half-Orc' },
    { name: 'Halfling' },
    { name: 'Human' },
    { name: 'Tiefling' },
  ];

  alignments = [
    { name: 'Lawful good (LG)' },
    { name: 'Neutral good (NG)' },
    { name: 'Chaotic good (CG)' },
    { name: 'Lawful neutral (LN)' },
    { name: 'True neutral (TN)' },
    { name: 'Chaotic neutral (CN)' },
    { name: 'Lawful evil (LE)' },
    { name: 'Neutral evil (NE)' },
    { name: 'Chaotic evil (CE)' },
  ]

}
