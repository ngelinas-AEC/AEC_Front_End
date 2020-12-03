import { Component, Input } from '@angular/core';

import { Forfait } from './forfait';
import { forfaits } from './mock-forfaits';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages';
  mesForfaits: Array<Forfait> = forfaits;
 
  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('./assets/imageplage.jpg')";
  }
}
