import { Item } from './../item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() existsInCart: boolean;

  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFromCart: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    this.addToCart.emit(this.item);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.item);
  }

}
