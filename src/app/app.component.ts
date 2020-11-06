import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-board';
  todo = [
    'Learn Angular Material',
    'Code Kanban Board App',
    'Code Final Project'
  ];

  doing = [
    'Learn Angular'
  ];

  done = [
    'Learn HTML basic',
    'Learn CSS basic',
    'Learn javascript basic',
    'Code Example Image Gallery',
    'Learn Javascript DOM',
    'Code Example Calculator App',
    'Learn Responsive Web Design'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      debugger;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
