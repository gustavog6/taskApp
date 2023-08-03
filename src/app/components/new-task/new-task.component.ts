import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../../models/model';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent implements OnInit {
  status = ['pending', 'in progress', 'done'];

  newTask!: FormGroup;

  constructor(private taskService: TasksServiceService) {}

  ngOnInit(): void {
    this.newTask = new FormGroup({
      newTitle: new FormControl(''),
      newDescription: new FormControl(''),
      newStart: new FormControl(''),
      newStatus: new FormControl(this.status[0]),
    });
  }

  onSubmit() {
    let newTask: Task = {
      id: Math.random().toString(36).substring(2, 18),
      title: this.newTask.controls['newTitle'].value,
      description: this.newTask.controls['newDescription'].value,
      start: '',
      status: this.newTask.controls['newStatus'].value,
    };
    this.taskService.addTask(newTask);
  }
}
