import { Component, OnInit, Input } from '@angular/core';

import { userInfo } from '../userInfo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  //receieve the user details list from the app(parent) component
  @Input() listOfUsers : userInfo[] = [];

  // accept the username of the user to display the user details
  searchUsername : String = "";

  // store the user details
  userinput : userInfo;

  constructor() { }

  ngOnInit() { }

  // display the user details on button click
  handleButtonClick() : void{ 
  
    // if the username is found in the list of users, display the user details in the webpage
    if (this.searchUsername) {
      this.userinput  = this.listOfUsers.find( ({ username }) => username ===  this.searchUsername);
     // console.log(this.userinput);
    }   
  }
}