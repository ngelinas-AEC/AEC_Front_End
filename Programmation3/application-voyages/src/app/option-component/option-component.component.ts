import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-component',
  templateUrl: './option-component.component.html',
  styleUrls: ['./option-component.component.css']
})
export class OptionComponentComponent implements OnInit {


  options = [
    { name: 'Face à la plage',  selected: false, id: 1 },
    { name: "Dans un lieu situé à proximité d'un parc/lieu naturel",  selected: false, id: 2 },
    { name: 'Ascenseur',  selected: false, id: 3 },
    { name: 'Miniclub',  selected: false, id: 4 },
    { name: 'Mariages',  selected: false, id: 5 },
    { name: 'Plage ',  selected: false, id: 6 },
    { name: 'Parque aquiatique',  selected: false, id: 7 },
    { name: "Salle d'exercice",  selected: false, id: 8 },
    { name: 'Collations 24 h',  selected: false, id: 9 },
    { name: 'Wi-Fi : dans tout le complexe',  selected: false, id: 10 },
    { name: 'Coffret de sûreté',  selected: false, id: 11},
    { name: 'Spa ($)',  selected: false, id: 12},
    { name: "Près d'un lieu culturel",  selected: false, id: 13},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
