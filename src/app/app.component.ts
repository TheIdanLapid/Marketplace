import { Component } from '@angular/core';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];

  constructor() {
    this.items = db;
  }
}
