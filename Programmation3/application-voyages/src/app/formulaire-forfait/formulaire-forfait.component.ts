import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})

export class FormulaireForfaitComponent implements OnInit {
  master_checked: boolean = false;
  master_indeterminate: boolean = false;
  checkbox_list = [];
  
  destinationsControl = new FormControl();
  villesDepartControl = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  
  villesDepart: string[] = ['Montréal', 'Québec'];
  destinations: string[] = ['Mexique', 'Costa Rica', 'Cuba'];
    
  constructor() {
    this.checkbox_list = [
      {
        name: "Face à la plage",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Dans un lieu situé à proximité d'un parc",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Ascenseur",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Miniclub",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Mariages",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Plage",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Parque aquiatique",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Salle d'exercice",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Collations 24 h",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Wi-Fi",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Coffret de sûreté",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Spa",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
      {
        name: "Près de musé",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }
    ]
  }

  master_change() {
    for (let value of Object.values(this.checkbox_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change(){
    let checked_count = 0;
    for (let value of Object.values(this.checkbox_list)) {
      if(value.checked)
      checked_count++;
    }

    if(checked_count>0 && checked_count<this.checkbox_list.length){
      this.master_indeterminate = true;
    }else if(checked_count == this.checkbox_list.length){
      this.master_indeterminate = false;
      this.master_checked = true;
    }else{
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }


  ngOnInit() {

    
    this.filteredDestinations = this.destinationsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDestinations(value))
      );
      this.filteredVillesDepart = this.villesDepartControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterVillesDepart(value))
      );
  }

  private filterDestinations(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.destinations.filter(destination => destination.toLowerCase().includes(filterValue));
  }

  private filterVillesDepart(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villesDepart.filter(ville => ville.toLowerCase().includes(filterValue));
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}