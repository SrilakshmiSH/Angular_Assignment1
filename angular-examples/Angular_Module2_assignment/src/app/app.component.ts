import { Component } from '@angular/core';

import { userInfo } from './userInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  receiveUsersList : userInfo[] = [];

  //receive the usersList from the admin(child) component
  getUsers(list : userInfo[]){
    this.receiveUsersList = list;
  }

}

