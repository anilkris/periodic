import { Component, OnInit } from '@angular/core';
import { ELEMENTS_DATA, ELEMENT } from './periodict-table';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  elementsData = [];
  colLabels: string[] = [];
  rowLabels: string[] = [];

  constructor() {
    for (let i = 1; i < 19; i++) {
      this.colLabels.push('' + i);
    }
    for (let j = 1; j < 8; j++) {
      this.rowLabels.push('' + j);
    }

    this.elementsData =
          ELEMENTS_DATA.elements.filter(element =>
            this.mainElements(element)
         );

  }

  mainElements(element) {


      if (element.number === 57) { 
        let x = element;
        x.symbol = 'Lanthanides';
        x.number = null ;  
      }
      if (element.number === 89) { 
        let x = element;
        x.symbol = 'Actinides';
        x.number = null;  
      }


      if(element.number === 119) {
        return null;
      }

      if (!this.lanthanide(element) && !this.actinide(element)) {
         return element;
      }

  }
  representLanthanide() {
    
        console.log('return represent lanthanides');
    return {
      name: 'Lanthanides',
      number: 0 
    };
  }
  lanthanide(element) {
    if (element.number > 56 && element.number < 72) {
      return true;
    }
  }
   actinide(element) {
    if (element.number > 88 && element.number < 104) {
      return true;
    }
  }

  ngOnInit(): void {
  }


}
