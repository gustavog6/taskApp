import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../../services/tasks-service.service';
import { Task } from '../../models/model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TasksServiceService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  // addTask() {
  //   this.taskService.addTask();
  // }
}
