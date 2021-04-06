import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskDataService } from './list.data.service';

@Component({
  selector: 'app-todo-list-display',
  templateUrl: './todo-list-display.component.html',
  styleUrls: ['./todo-list-display.component.css']
})
export class TodoListDisplayComponent implements OnInit {

  taskData = [];    //Array of task Data displayed on screen
  allBuckets = [];  //Array of complete task Data
  allTasks = [];
  selectedTasks = [];
  bucketIndex = 0;
  show:boolean = false;



  taskSubscription: Subscription;

  constructor(private taskDataService: TaskDataService) { }



  ngOnInit(): void {
    this.taskSubscription = this.taskDataService.listDataChanged
      .subscribe((serviceTaskData) => {
        console.log(serviceTaskData);
        this.taskData = [];
        this.allBuckets = serviceTaskData;
      });

    this.allBuckets = this.taskDataService.getListData();


  }

  // display the tasks of selected bucket.

  changeAllTasks(index) {
    this.allTasks = [];
    this.allTasks = this.allBuckets[index]["task"];
    this.bucketIndex = index;
    console.log(this.allBuckets);

    this.show = !this.show;
  }

}