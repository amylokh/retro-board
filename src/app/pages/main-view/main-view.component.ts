import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Sprint X Board', [
    new Column('What went well', [
      "Great things done",
      "Features released",
      "Build author dashboard"
    ]),
    new Column('To Improve', [
      "Dev work",
      "Capacity planning",
      "To improve 'some things'"
    ]),
    new Column('Action Items', [
      'Catchup with Michael',
      'Discuss on the POC',
      'Work on spike',
      'Do something great',
      'Do this action'
    ])
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
