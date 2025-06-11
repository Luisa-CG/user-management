import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.css',
  standalone: true
})
export class UserFilterComponent {

  @Output() selected = new EventEmitter<string>();
  searchTerm = '';
  suggestions: string[] = [];

  constructor(private userService: UserService) {

  }

  search() {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.suggestions = [];
      this.selected.emit('');
      return;
    }

    const allValues = this.userService.users.flatMap(user =>
      [user.nombre, user.entidad, user.email]
    );

    this.suggestions = Array.from(new Set(
      allValues.filter(val => val.toLowerCase().includes(term))
    ));

    this.selected.emit(term);
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.suggestions = [];
    this.selected.emit(suggestion.toLowerCase());
  }
}
