import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-forfaits-x-component',
  templateUrl: './forfaits-x-component.component.html',
  styleUrls: ['./forfaits-x-component.component.css']
})
export class ForfaitsXComponentComponent implements OnInit {
  itemsForfaits: Array<Forfait> = forfaits;
  constructor() { }

  ngOnInit(): void {
  }

}
