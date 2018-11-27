import { Component } from '@angular/core';
import { db } from './db';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = [];

  shoppingCart: Item[] = [];

  constructor() {
    this.items = db;
  }

  addToCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item: Item) {
    const index = this.shoppingCart.indexOf(item);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
  }

  existsInCart(item: Item): boolean {
    return this.shoppingCart.includes(item);
  }
}
