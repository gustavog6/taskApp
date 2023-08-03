import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/model';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() title!: string;
  @Input() status!: 'pending' | 'in progress' | 'done';
  @Input() rLink!: string;

  tasks!: Task[];

  constructor(private taskService: TasksServiceService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  markDone(id: string) {
    this.taskService.markTaskDone(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }
  markInprogress(id: string) {
    this.taskService.markTaskProgress(id);
  }
}
