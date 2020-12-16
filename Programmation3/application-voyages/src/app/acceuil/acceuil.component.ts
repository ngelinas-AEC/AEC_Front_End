import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

 
  itemsForfaits: Array<Forfait> = forfaits;

  constructor() { }

  ngOnInit(): void {
  }

  getUrl()
  {
    return "url('./assets/imageplage.jpg')";
  }
}
