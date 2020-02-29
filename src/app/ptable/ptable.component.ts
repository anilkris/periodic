import { Component, OnInit } from '@angular/core';
import { ELEMENTS_DATA, ELEMENT } from './periodict-table';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  elementsData: any[];
  colLabels: string[] = [];
  rowLabels: string[] = [];

  constructor() {
    for (let i = 1; i < 19; i++) {
      this.colLabels.push('' + i);
    }
    for (let j = 1; j < 8; j++) {
      this.rowLabels.push('' + j);
    }

    this.elementsData = ELEMENTS_DATA.elements;

  }

  ngOnInit(): void {
  }

  
}
