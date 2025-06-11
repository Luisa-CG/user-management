import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  standalone: true
})
export class UserFormComponent {

  constructor(public userService: UserService) { }

  saveUser() {
    if (!this.userService.isNew && this.userService.form.id) {
      this.userService.updateUser(this.userService.form.id, this.userService.form).subscribe(() => {
        this.userService.form = { id: '', nombre: '', entidad: '', email: '' };
        this.userService.isNew = true;
        this.userService.getUsers();
      })
    } else {
      this.userService.addUser(this.userService.form).subscribe(() => {
        this.userService.getUsers();
        this.userService.form = { id: '', nombre: '', entidad: '', email: '' };
      })
    }
  }

}
