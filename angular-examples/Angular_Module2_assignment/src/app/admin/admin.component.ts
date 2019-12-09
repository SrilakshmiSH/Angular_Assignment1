import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { userInfo } from '../userInfo';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //share the new users list from admin(child) to the app(parent) component
  @Output() newusersList = new EventEmitter<userInfo[]>();

  constructor() { }

  //create a new list which stores the user details
  //share the list of user details from admin(child) to the app(parent) component, to be shared with the user(child) component
  usersList : userInfo[]=[];

  //accept new user details
  addUsername : string;
  addEmail : string;
  addPhoneNumber : number;
  
  ngOnInit() { 
   }

  //insert new details to the list on button click
  submitUserDetails(){
    let user = new userInfo(this.addUsername,this.addEmail,this.addPhoneNumber);
    
    //add the user to the list
    this.usersList.push(user);
   
    console.log("users list contains below details: ",this.usersList);

    //emit the usersList to share with the app(parent) component
    this.newusersList.emit(this.usersList);
  }

}
