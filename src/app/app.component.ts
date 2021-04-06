import { Component } from '@angular/core';
import { TaskDataService } from './todo-list-display/list.data.service';
import {SampleDataService} from './todo-list-display/sample-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private taskDataService: TaskDataService,
    private sampleData: SampleDataService){}
  
  title = 'ui-assignment';

  

  ngOnInit(): void{

    let listData = this.sampleData.getSampleData();

    this.taskDataService.setListData(listData);


 

  }
}

