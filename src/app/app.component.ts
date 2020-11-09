import { ConfirmDialogModel, ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Column } from './../models/column.model';
import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanban-board';
  board: Column[] = [
    {
      name: 'Todo',
      task: [
        'Learn Angular Material',
        'Code Kanban Board App',
        'Code Final Project',
      ],
      count: 3
    },
    {
      name: 'Doing',
      task: ['Learn Angular'],
      count: 1
    },
    {
      name: 'Done',
      task: [
        'Learn HTML basic',
        'Learn CSS basic',
        'Learn javascript basic',
        'Code Example Image Gallery',
        'Learn Javascript DOM',
        'Code Example Calculator App',
        'Learn Responsive Web Design',
      ],
      count : 7
    },
  ];

  constructor(public dialog: MatDialog) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event);
      this.countItemInList();
    }
  }
  addJob(item, name) {
    if (!this.noWhitespaceValidator(item)) {
      this.board.forEach((col) => {
        if (col.name === name) {
          col.task.push(item.value);
          col.count = col.task.length;
        }
      });

      item.value = '';
    }
  }
  addColumn(column) {
    if (!this.noWhitespaceValidator(column)) {
      let columnNew: Column = {
        name: column.value,
        task: [],
        count: 0
      };
      this.board.push(columnNew);
      column.value = '';
    }
  }
  removeItem(indexItem, indexColumn) {
    let result: string = '';
    const message = `Bạn có chắc muốn xóa item?`;

    const dialogData = new ConfirmDialogModel("Xác nhận xóa", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      result = dialogResult;
      console.log(result);
      if (result) {
        this.board[indexColumn].task.splice(indexItem, 1);
        this.board[indexColumn].count = this.board[indexColumn].task.length;
      }
    });
  }
  removeColumn(indexColumn) {
    let result: string = '';
    const message = `Bạn có chắc muốn xóa cột?`;

    const dialogData = new ConfirmDialogModel("Xác nhận xóa", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      result = dialogResult;
      console.log(result);
      if (result) {
        this.board.splice(indexColumn, 1);
      }
    });

  }
  noWhitespaceValidator(control) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  countItemInList(){
    this.board.forEach(item => {
      item.count = item.task.length;
    });
  }
}
