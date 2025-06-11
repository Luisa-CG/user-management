import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserFilterComponent } from '../user-filter/user-filter.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule, UserFormComponent, UserFilterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
  standalone: true
})
export class UserLayoutComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
  }

  deleteUser(id: string) {
    Swal.fire({
      title: 'Eliminar usuario',
      text: '¿Está seguro de eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then(result => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(() => {
          this.userService.getUsers();
          Swal.fire('Eliminado', 'El usuario fue eliminado correctamente.', 'success');
        });
      }
    });
  }

  search(term: string) {
    if (!term) {
      this.userService.filterUsers = this.userService.users;
    } else {
      this.userService.filterUsers = this.userService.users.filter(u =>
        Object.values(u).some(v => String(v).toLowerCase().includes(term))
      );
    }
  }
}
