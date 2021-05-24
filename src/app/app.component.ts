import { changeDivSize, fadeInOut } from './animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[changeDivSize,fadeInOut]
})
export class AppComponent {
  currentState = 'initial';
  listItems =[]

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  addItem() {
    debugger;
    let item = 'List Item' + (this.listItems.length + 1);
    this.listItems.push(item);
  }
  removeItem() {
    this.listItems.pop();
  }
}
