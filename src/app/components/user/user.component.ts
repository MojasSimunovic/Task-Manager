import { Component, computed, Input, signal, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';

import { User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  @Input({required: true}) user!: User;

// inline settig up the type, preferable version would be with ts type
//  @Input({required: true}) user!: {
//    id:string,
//    name:string,
//    avatar: string
//  }

  @Output() select = new EventEmitter<string>();
//  select = output<string>(); output approach, the bottom function remains the same
//  avatar = input.required<string>();
//  name = input.required<string>(); this is signal approach

  onClickEvent() {
   this.select.emit(this.user.id)
  }
}
