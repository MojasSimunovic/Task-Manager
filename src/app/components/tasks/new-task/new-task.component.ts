import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { newTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClickOutside() {
    this.closeDialog.emit();
  }
  onSubmit() {
    this.tasksService.addUserTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    )
    this.closeDialog.emit();
  }
}
