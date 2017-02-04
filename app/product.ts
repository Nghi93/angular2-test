import { Attribute } from './attribute';

export class Product {
  name: string;
  global_attributes: Attribute[];
  column_keys: string[];
  rows: string[][];
}
