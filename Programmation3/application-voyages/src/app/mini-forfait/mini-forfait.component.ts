import { Component,  Input, OnInit } from '@angular/core';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
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
