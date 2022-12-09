import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserRole, IUser, } from "../../interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
 @Output() addUser: EventEmitter<IUser>=new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {

  }

 addUserHandler(fullName:string, role:string){
    console.log(fullName, role as UserRole);

    this.addUser.emit({
      fullName:fullName,
      role: role as UserRole,
      status: 'inactive'
    })
   console.log('new user created', fullName, role);
}
}
