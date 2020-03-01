import { Component, OnInit } from '@angular/core';
import { ELEMENTS_DATA } from './periodict-table';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {
  elementsData = [];
  lanthanides = [];
  actinides = [];
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
    this.elementsData[56] = { ...this.elementsData[56], symbol: 'Lanthanides1', number: null };

    this.elementsData[74] =
    { ...this.elementsData[74], symbol: 'Actinides', number: null };

    this.lanthanides = ELEMENTS_DATA.elements.filter(element => this.lanthanide(element));
    this.actinides = ELEMENTS_DATA.elements.filter(element => this.actinide(element));
  }

  mainElements(element) {

    if (element.number === 57) {
      return true;
    }
    if (element.number === 89) {
      return true;
    }
    if (element.number === 119) {
      return false;
    }

    if (!this.lanthanide(element) && !this.actinide(element)) {
      return true;
    } else {
      return false;
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

  getClassName(element):string {
    console.log(element.category);


    if (element.category.includes('diatomic nonmetal')) {
      return 'diatomic_nonmetal';
    }
    else if (element.category.includes('noble gas')){
      return 'noble_gas';
    }else if(element.category.includes('transition metal')){
      return 'transition_metal'

    }else if(element.category.includes('alkali metal')){
      return 'alkali_metal';
    }
    else if(element.category.includes('alkaline earth metal')){
      return 'alkaline_earth_metal';
    }
    else if(element.category.includes('metalloid')){
      return 'metalloid';
    }
    else if(element.category.includes('polyatomic nonmetal')){
      return 'polyatomic_nonmetal';
    }
    else {
      return 'unknown';
    }

  }

}
