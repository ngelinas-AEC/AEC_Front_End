import { Component,  Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {
  @Input() forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
    console.log('Forfait:', this.forfait );
  }
  
  getUrl()
  {
    return "url('./assets/card.png')";
  }
}
