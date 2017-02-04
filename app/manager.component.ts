import { Component } from '@angular/core';
import { Product } from './product';
import { Attribute } from './attribute';

@Component({
  selector: 'manager',
  moduleId: module.id,
  templateUrl: 'manager.component.html',
  styleUrls: ['manager.component.css']
})
export class ManagerComponent {
  title: String = '';
  product: Product = {
    name: 'test',
    global_attributes: [{key: 'Farbe', value: 'rot'} as Attribute],
    column_keys: ['bla', 'la', 'bla2'],
    rows: [['test', 'test', 'tet3'], ['a', 'b', 'c']]
  };

  getColumnIterator(): number[] {
    return Array.from(Array(this.product.column_keys.length).keys());
  }

  constructor() {

  }

  deleteRow(index: number): void {
    this.product.rows.splice(index, 1);
  }

  deleteColumn(index: number): void {
    this.product.column_keys.splice(index, 1);
    this.product.rows.forEach(r => r.splice(index, 1));
  }

  addColumn(): void {
    this.product.column_keys.push('');
    this.product.rows.forEach(r => r.push(''));
  }

  addGlobalColumn(): void {
    this.product.global_attributes.push({} as Attribute);
  }

  removeGlobalColumn(index: number): void {
    this.product.global_attributes.splice(index, 1);
  }

  addRow(): void {
    this.product.rows.push(new Array(this.product.column_keys.length))
  }

  trackByIndex(index: number, obj: String): number {
    return index;
  }
}
