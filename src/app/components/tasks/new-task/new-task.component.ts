import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { newTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() addEvent = new EventEmitter<newTask>();
  @Output() closeDialog = new EventEmitter();
  @Input({required: true}) userId!: string;

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClickOutside() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.addEvent.emit({title: this.enteredTitle, summary: this.enteredSummary, date : this.enteredDate});
  }
}
