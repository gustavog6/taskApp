import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/models/model';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
})
export class TaskDescriptionComponent implements OnInit {
  tasks!: Task[];

  selectedId!: Task;

  constructor(
    private taskService: TasksServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getLocalstorage();

    let taskId = this.activatedRoute.snapshot.paramMap.get('id');

    this.selectedId = this.tasks.find((t) => t.id === taskId)!;

    console.log(taskId);
  }
}
