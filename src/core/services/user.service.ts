import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataUri = 'http://localhost:3000/rows';
  users: User[] = [];
  filterUsers: User[] = [];
  isNew = true;
  form: User = { id: '', nombre: '', entidad: '', email: '' };

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get<User[]>(this.dataUri).subscribe(data => {
      this.users = data;
      this.filterUsers = [...data];
    });
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.dataUri}/${email}`);
  }

  getUserByValue(value: string): Observable<User> {
    return this.http.get<User>(`${this.dataUri}/${value}`);
  }

  addUser(user: User): Observable<User> {
    const userWithId: User = {
      ...user,
      id: this.generateUUID()
    };
    return this.http.post<User>(this.dataUri, userWithId);
  }

  updateUser(email: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.dataUri}/${email}`, user);
  }

  deleteUser(email: string): Observable<any> {
    return this.http.delete(`${this.dataUri}/${email}`);
  }

  isUpdate(user: User) {
    this.form = { ...user };
    this.isNew = false;
  }

  private generateUUID(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
