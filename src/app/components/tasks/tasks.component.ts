import { Component, Input, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../../dummy-tasks';
import { User } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true}) user!: User;

  get SelectedUserTasks() {
    return dummyTasks.filter((item) => item.userId === this.user.id);
  }
}
