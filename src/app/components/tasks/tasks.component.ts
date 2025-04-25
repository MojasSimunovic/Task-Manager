import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
// import { dummyTasks } from '../../../dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]
  @Input({ required: true}) user!: User;

  isAddingTask: boolean = false;

  get SelectedUserTasks() {
    return this.dummyTasks.filter((item) => item.userId === this.user.id);
  }
  onCompletedTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((item)=> item.id !== id);
  }
  onAddTaskModal() {
    this.isAddingTask = true;
  }
  onDialogClose() {
    this.isAddingTask = false;
  }

  onAddEvent(data: newTask) {
    let newTask = {
      id: `t${this.dummyTasks.length + 1}`,
      userId: this.user.id,
      title: data.title,
      summary: data.summary,
      dueDate: data.date
    }
    this.dummyTasks.push(newTask);
    this.isAddingTask = false;
  }
}
