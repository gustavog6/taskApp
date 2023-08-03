import { Injectable } from '@angular/core';
import { Task } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  tasks: Task[] = [];

  localTasks!: Task[];

  constructor() {
    // this.saveLocalstorage();
    this.tasks = this.getLocalstorage();
  }

  saveLocalstorage() {
    localStorage.setItem('taskapp', JSON.stringify(this.tasks));
  }

  getLocalstorage() {
    return (this.localTasks = JSON.parse(localStorage.getItem('taskapp')!));
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveLocalstorage();
  }

  markTaskDone(id: string) {
    this.tasks.filter((t) => t.id === id).map((t) => (t.status = 'done'));

    this.saveLocalstorage();
  }

  markTaskProgress(id: string) {
    this.tasks
      .filter((t) => t.id === id)
      .map((t) => (t.status = 'in progress'));

    this.saveLocalstorage();
  }

  deleteTask(id: string) {
    let newId = this.tasks.map((t) => t.id).indexOf(id);

    this.tasks.splice(newId, 1);

    this.saveLocalstorage();
  }
}
