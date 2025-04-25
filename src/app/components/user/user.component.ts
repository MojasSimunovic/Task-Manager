import { Component, computed, Input, signal, input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  @Input() active: boolean | undefined;
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();

  onClickEvent() {
   this.select.emit(this.user.id)
  }
}
