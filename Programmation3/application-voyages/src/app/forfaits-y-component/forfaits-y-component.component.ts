import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-forfaits-y-component',
  templateUrl: './forfaits-y-component.component.html',
  styleUrls: ['./forfaits-y-component.component.css']
})
export class ForfaitsYComponentComponent implements OnInit {
  
  itemsForfaits: Array<Forfait> = forfaits;

  constructor() { }

  ngOnInit(): void {
  }

}
