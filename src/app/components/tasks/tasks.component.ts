import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
// import { dummyTasks } from '../../../dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true}) user!: User;

  isAddingTask: boolean = false;

  constructor( private tasksService : TasksService) {}
  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }
  onAddTaskModal() {
    this.isAddingTask = true;
  }
  onDialogClose() {
    this.isAddingTask = false;
  }
}
