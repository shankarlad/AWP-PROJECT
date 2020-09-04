import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/profile");
    xhr.onload = () => {
      let jsonData = JSON.parse(xhr.responseText);

      document.querySelector('#h1').innerHTML = "Mr." + jsonData.result[1].FNAME + " " + jsonData.result[1].LNAME;

    }

    xhr.send();

  }

}
