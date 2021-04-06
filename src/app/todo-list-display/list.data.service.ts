import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class TaskDataService {

    listDataChanged = new Subject<any>();
    rerender = new Subject<any>();
    taskListData = [];
    taskSubs: Subscription;


    //update the tasklist data
    setListData(listDataArray) {
        this.taskListData = listDataArray;
        this.listDataChanged.next(this.taskListData);

    }

    getListData() {
        return this.taskListData;
    }

}